import { useEffect } from 'react';

interface IProps {
  visible?: boolean;
  queryKey?: string;
  queryValue?: number | string | boolean;
  // eslint-disable-next-line no-unused-vars
  setVisible?: (visible: boolean) => void;
  [index: string]: any;
}

// url 中设置 history.state 的值
function setHistoryState(state: any) {
  history.replaceState(
    {
      ...history.state,
      ...state
    },
    ''
  );
}
// https://github.com/zhaoqize/blog/issues/20
const useHistoryPopup = (props: IProps) => {
  const {
    visible,
    queryKey = 'popup',
    queryValue = 'preview',
    setVisible
  } = props || {};
  const popupKey = queryKey + `=` + queryValue;

  function open() {
    setHistoryState({
      popupKey
    });
    const baseUrl = location.href;
    const url = baseUrl?.includes('?')
      ? baseUrl + `&${popupKey}`
      : baseUrl + `?${popupKey}`;
    // 此时push会多一条历史记录，用绝对地址兼容hashRouter, 可将App.tsx中BrowserRouter替换HashRouter尝试
    history.pushState({ popupKey }, '', url);
    // history.pushState({ popupKey }, '', `?${popupKey}`);
  }

  function back() {
    setVisible?.(false);
  }

  // 判断弹窗是否有返回记录
  function hasBackRecord() {
    return window.history.state?.popupKey === popupKey;
  }

  function onQueryChange() {
    // 监听到返回事件，注意，只有触发了返回才会执行这个方法
    if (hasBackRecord()) {
      back();
    }
  }

  useEffect(() => {
    // 浏览器state变化时，如果存在记录，物理返回会自定清除一次记录
    window.addEventListener('popstate', onQueryChange);
    return () => {
      // 离开页面的时候取消监听popstate
      window.removeEventListener('popstate', onQueryChange);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // 打开，添加query,增加一条历史记录
      open();
    } else {
      // 否则关闭，此时不会清除历史记录，非popstate触发，需要手动清除历史记录(在弹窗层触发的关闭)
      if (hasBackRecord()) {
        back();
      }
    }
  }, [visible]);

  return {
    dialogVisible: visible,
    open
  };
};

export default useHistoryPopup;
