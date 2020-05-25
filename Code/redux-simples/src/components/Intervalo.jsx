import React from 'react'

import Card from './Card'
import {connect} from 'react-redux'

import './Intervalo.css'

const Intervalo =  props => {

    const {min, max} = props

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}  />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)