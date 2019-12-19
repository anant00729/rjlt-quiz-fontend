import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initLogout } from '../actions/authActions'
import { NOR} from '../actions/constants';


class Header extends Component {


  onLogoutClicked = (e) => {
    this.props.initLogout(NOR);
  }


  render() {
    let { isAuthenticated } = this.props.auth
    let _login_option = this.checkAndShowLoginOpts(isAuthenticated)
    
    return ( 
    <div>
      <section className="fixed bg-white h-12 w-full top-0 flex shadow-md justify-between px-4">
              <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                  <Link href="" className="text-center flex items-center">

                    <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <p className="content-center text-black pl-2 app-font-top">EVALUATOR</p>
                  </Link>
              </div>
              {_login_option}
            
          </section>

      </div>
    )
  }

  checkAndShowLoginOpts(isAuthenticated){
    return isAuthenticated ? 
    (
      <div className="w-1/3 h-full flex content-center justify-end
      flex-wrap cursor-pointer">
        <botton onClick={this.onLogoutClicked} className="inline-block bg-indigo-500
        text-white px-2 py-2 uppercase tracking-wider 
        text-xs font-semibold rounded-lg shadow-md 
         ">Logout</botton>
      </div>
    ) : null
  }
}

Header.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps, {initLogout})(Header)
