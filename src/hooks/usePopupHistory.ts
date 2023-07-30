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
    window.addEventListener('popstate', onQueryChange);
    return () => {
      // 离开页面的时候取消监听popstate
      window.removeEventListener('popstate', onQueryChange);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // 打开，添加query
      console.log('添加query');
      open();
    } else {
      // 否则关闭,清除state
      console.log('关闭');
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
