import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'antd'
import dayjs from 'dayjs'
import styles from './DFPassword.module.css'

export default function DFPassword() {
  const { Meta } = Card

  const DFPasswordURL = "http://localhost:3000/df/password"

  const [DFPassword, setDFPassword] = useState<DFPassword[]>([])

  const [updateTime, setUpdateTime] = useState("")

  const getPassword = () => {
    fetch(DFPasswordURL, {
      method: 'GET',
    }).then(res => {
      const json = res.json()
      console.log(json)
      return json
    }).then(data => {
      setDFPassword(data.data.list)
      const time = dayjs(data.data.requestInfo.timestamp).format('YYYY/MM/DD/HH:mm')
      setUpdateTime(time)
    })
  }

  type MapID = 1 | 2 |3|4|5

  interface DFPassword {
    mapID: MapID
    mapName: string
    secret: number
  }

  const map = {
    1: '../../../public/ov-db.webp',
  2: '../../../public/ov-cgxg.webp',
    3: '../../../public/ov-bks.webp',
    4:'../../../public/ov-htjd.webp',
    5: '../../../public/ov-cxjy.webp',
  }

  return (
    <div>
      <h2>小涛查DF密码</h2>
      <Button type="primary" color="purple" onClick={getPassword}>获取今日DF密码</Button>
      <span>更新时间: {updateTime }</span>
      <Row justify="center" gutter={16}>
        {
          DFPassword.map(dfPassword => {
            return <Col className={styles.container} span={8} key={dfPassword.mapID}>
              <Card
                variant="borderless"
                className={styles.card}
                style={{width: 200}}
                hoverable
                cover={
                  <img
                    width={100}
                    draggable={false}
                    alt="example"
                    src={map[dfPassword.mapID]}
                  />
                }
              >
                <Meta title={dfPassword.secret} description={dfPassword.mapName} />
              </Card>
            </Col>
          })
        }
      </Row>
      
    </div>
  )
}
