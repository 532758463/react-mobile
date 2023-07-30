import useHistoryPopup from '@src/hooks/usePopupHistory';
import { Popup } from 'antd-mobile';
import { ComponentProps } from 'react';

type IPopup = ComponentProps<typeof Popup>;

interface IProps extends IPopup {
  visible?: boolean;
  queryKey?: string;
  queryValue?: number | string | boolean;
  // eslint-disable-next-line no-unused-vars
  setVisible: (visible: boolean) => void;
  [index: string]: any;
}
const Modal = (props: IProps) => {
  const { queryKey, setVisible, visible, onMaskClick, onClose, ...rest } =
    props;
  const { dialogVisible } = useHistoryPopup({ setVisible, queryKey, visible });
  return (
    <Popup
      onClose={() => {
        onClose?.();
        // 弹窗自行关闭时需要执行back，否则会多一个历史记录。
        history.back();
      }}
      visible={dialogVisible}
      onMaskClick={(e) => {
        onMaskClick?.(e);
        history.back();
      }}
      {...rest}
    />
  );
};

export default Modal;
