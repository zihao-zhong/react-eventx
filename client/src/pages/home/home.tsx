import { useState, useEffect } from 'react'
import './home.scss';
import { Col, Row } from 'antd';
import { getAssetsList } from '../../api/assets/index';
import { AssetsResponse } from '../../api/assets/assets.d';

// 定时请求数据更新
function hanleGetAssetsListInterval(setData: Function) {
  setInterval(() => {
    getAssetsList({ limit: 12 }).then((data: Array<AssetsResponse>) => {
      setData(data);
    });
  }, 10000);
}

function Home() {
  const [priceList, setPriceList] = useState<AssetsResponse[]>([]);

  useEffect(() => {
    getAssetsList({ limit: 12 }).then((data: Array<AssetsResponse>) => {
      setPriceList(data);
    });
    hanleGetAssetsListInterval(setPriceList);
  }, []);

  return (
    <div className="home">
      <h2 className="home-title">Cryptocurrency Realtime Price</h2>
      <Row
        className="home-price-container"
        gutter={[12, 16]}
      >
        {
          priceList.map((item) =>
            <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={item.id}>
              <div className="home-price-item">
                <h3 className="price-item-title">{ item.id }</h3>
                <p className="price-item-price">${ item.priceUsd }</p>
                <Row gutter={12}>
                  <Col span={12}>
                    <p className="price-item-sub-title">volume:</p>
                    <span className="price-item-money">
                      { Number(item.volumeUsd24Hr).toFixed(8) || '-' }
                    </span>
                  </Col>
                  <Col span={12}>
                    <p className="price-item-sub-title">change:</p>
                    <span className={`price-item-money ${String(item.changePercent24Hr).startsWith('-') ? 'minus' : 'positive'}`}>
                      { Number(item.changePercent24Hr).toFixed(8) || '-' }
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export default Home;
