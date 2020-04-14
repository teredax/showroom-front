import Axios from 'axios'
import router from '@/router'

const uri = ''
//const uri = 'http://192.168.0.115:3000'
const BPAPI = uri

export default {
  user: { authenticated: false },
  authenticate (context, credentials) {

    //For Demostream

    if(credentials.email != "" && credentials.password !=""){

      context.$cookies.set('BP', "DemoAldo", '1D')
      context.$cookies.set('H1BPidLo', "123", '1D')
      context.$cookies.set('IjkBPusrnmLo', "Administrador", '1D')
      router.push('/items')
      window.location.reload()
      context.$store.commit("toggle_alert", {
        color: "green",
        text: 'Bienvenido a BP'
      });
  /*
    var body = new URLSearchParams()
    body.append('username', credentials.email)
    body.append('password', credentials.password)
    Axios.post(`${BPAPI}/api/login`, body)
        .then((response) => {
          if (response.data.data.role == '99') {
            context.$cookies.set('BP', response.data.data.token, '1D')
            context.$cookies.set('H1BPidLo', response.data.data.id, '1D')
            context.$cookies.set('IjkBPusrnmLo', response.data.data.username, '1D')
            router.push('/items')
            window.location.reload()
            context.$store.commit("toggle_alert", {
              color: "green",
              text: 'Bienvenido a BP'
            });

            context.loadLogin = false
          }else{
            context.$store.commit("toggle_alert", {
              color: "red",
              text: 'Porfavor inicio sesión con un usuario del tipo administrador'
            });        
          }
        }).catch((e) => {
          context.loadLogin = false
          context.$store.commit("toggle_alert", {
            color: "red",
            text: 'Credenciales inválidas, intente nuevamente'
          });        })*/
        }else{
          context.$store.commit('toggle_alert', {color: 'red', text: 'Uno o mas campos vacíos'})
        }

    
  },
  signout (context, redirect) {
    router.push('/')
    context.$cookies.remove('BP')
    context.$cookies.remove('H1BPidLo')
    context.$cookies.remove('IjkBPusrnmLo')
    window.location.reload()
  },
  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },
  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookies.get('BP')}`
  }
}
