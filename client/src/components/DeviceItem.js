import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import { useNavigate  } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image src={process.env.REACT_APP_API_URL + device.img} width={150} height={150} />
                <div className='d-flex justify-content-between align-item-center mt-1 text-black-50'>
                    <div>Samsung...</div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image src={star} width={18} height={18} />
                    </div>            
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem