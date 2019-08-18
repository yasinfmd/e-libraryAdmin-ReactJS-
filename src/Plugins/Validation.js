var Validation = {

    checkvalidate:function(data,rules,ruleslength,rulesdata){
      if(rules){
        if(rules==">"){
              if(data.trim()=='' || data.trim().length>ruleslength){
                return "is-invalid"
              }else{
                return  "is-valid"
              }
        }else if(rules=="<"){
          if(data.trim()=='' || data.trim().length<ruleslength){
            return "is-invalid"
          }else{
            return  "is-valid"
          }
        } else if(rules=="="){
              if(data == rulesdata){
                return "is-invalid"
              }else{
                return  "is-valid"
        }
        }
      }else{
          if(data.trim()==''){
            return "is-invalid"
          }else{
            return  "is-valid"
          }
      }
    }
}
export default Validation
