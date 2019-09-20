import React from 'react';
import {
    
    Button,
    Row,
    Col
} from 'reactstrap';
import { Projects} from 'components/dashboard-components';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

class Starter extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <Projects />
                    </Col>
                </Row>
                
            </div>
        );

    }
}

export default Starter;
