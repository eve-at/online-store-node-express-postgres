import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import { Card, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand => 
                <Card 
                    className="me-2 mb-2"
                    style={{width: 'auto',cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key="{brand.id}"
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
})

export default BrandBar