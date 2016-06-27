
import fbRef from './fbref'

import BackboneFire from 'bbfire'

BackboneFire.Firebase.Model.prototype.fetchWithPromise = 
BackboneFire.Firebase.Collection.prototype.fetchWithPromise = 
  function() {
      this.fetch()
      var self = this
      var p = new Promise(function(res,rej){
          self.once('sync',function() {
              res()
          })
          self.once('err',function() {
              rej()
          })
      })
      return p
  }


export const fbUrl = () => `https://project-8168779970786781903.firebaseio.com/`
