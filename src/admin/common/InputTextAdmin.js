import React, {Component} from 'react'
import classnames from 'classnames'

class TextInputAdmin extends Component {

    render(){
        const { name , label , value , placeholder, type , onChange, error } = this.props
        
        return (
            <div>
                {/* <label htmlFor={name}>{label}</label> */}
                <input className={
                    classnames('appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    ,{ 'text-field-error border-red-400' : error })}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                          />
                {
                    error ? 
                    (<div className="text-left text-red-400 mt-1 text-xs italic">{error}</div>) :
                    null
                }
                
            </div>
        )
    }

}

export default TextInputAdmin