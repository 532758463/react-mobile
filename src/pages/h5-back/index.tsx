import React, { useState } from 'react';
import { Space, Button } from 'antd-mobile';
import { DemoBlock } from './demos-util';
import Popup from '@components/modal';

export const PopupPageDemo = () => {
  const [visible1, setVisible1] = useState(false);

  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <>
      <DemoBlock title="多层堆叠">
        <Button
          onClick={() => {
            setVisible1(true);
          }}
        >
          展开第一个弹出层
        </Button>
        <Popup
          visible={visible1}
          queryKey="one"
          onMaskClick={() => {
            setVisible1(false);
          }}
          setVisible={setVisible1}
          bodyStyle={{ height: '40vh' }}
        >
          <div style={{ padding: '24px' }}>
            <Space direction="vertical">
              <div>我是第一个弹出层</div>
              <Button
                onClick={() => {
                  setVisible2(true);
                }}
              >
                展开第二个弹出层
              </Button>
            </Space>
          </div>
        </Popup>
        <Popup
          visible={visible2}
          queryKey="two"
          onMaskClick={() => {
            setVisible2(false);
          }}
          setVisible={setVisible2}
          bodyStyle={{ height: '30vh' }}
        >
          <Space direction="vertical">
            <div style={{ padding: '24px' }}>
              <div>这是弹出层2</div>
            </div>
            <Button
              onClick={() => {
                setVisible3(true);
              }}
            >
              展开第三个弹出层
            </Button>
          </Space>
        </Popup>
        <Popup
          visible={visible3}
          queryKey="three"
          onMaskClick={() => {
            setVisible3(false);
          }}
          setVisible={setVisible3}
          bodyStyle={{ height: '20vh' }}
        >
          <div style={{ padding: '24px' }}>
            <div>这是弹出层3</div>
          </div>
        </Popup>
      </DemoBlock>
    </>
  );
};

export default PopupPageDemo;
