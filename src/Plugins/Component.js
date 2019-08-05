import  swal from 'sweetalert'
var Component = {
  showalert: function (title, icon, button) {
    swal({
      title: title,
      icon: icon,
      button: button
    })
  },

  allLetter: function (param) {
    var letters = /^[A-Za-z]+$/
    if (
      param.match(letters) ||
      param.toUpperCase().includes('Ş') ||
      param.toUpperCase().includes('Ç') ||
      param.toUpperCase().includes('Ö') ||
      param.toUpperCase().includes('Ğ') ||
      param.toUpperCase().includes('Ü')
    ) {
      return true
    } else {
      return false
    }
  },
  checktc: function (value) {
    value = value.toString()
    var isEleven = /^[0-9]{11}$/.test(value)
    var totalX = 0
    for (var i = 0; i < 10; i++) {
      totalX += Number(value.substr(i, 1))
    }
    var isRuleX = totalX % 10 == value.substr(10, 1)
    var totalY1 = 0
    var totalY2 = 0
    for (var i = 0; i < 10; i += 2) {
      totalY1 += Number(value.substr(i, 1))
    }
    for (var i = 1; i < 10; i += 2) {
      totalY2 += Number(value.substr(i, 1))
    }
    var isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0)
    return isEleven && isRuleX && isRuleY
  },
  passwordstronger: function (password) {
    if (password.length === 0) {
      return
    }
    var matchedCase = new Array()
    matchedCase.push('[$@$!%*#?&]')
    matchedCase.push('[A-Z]')
    matchedCase.push('[0-9]')
    matchedCase.push('[a-z]')
    var ctr = 0
    for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
        ctr++
      }
    }
    var color = ''
    var strength = ''
    switch (ctr) {
      case 0:
      case 1:
      case 2:
        strength = 'Zayıf'
        break
      case 3:
        strength = 'Orta'
        break
      case 4:
        strength = 'Yüksek'
        break
    }
    return strength
  },
  validateemail: function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  },
  parseJwt: function (token) {
    var base64Url = token.split('.')[1]
    var base64 = decodeURIComponent(atob(base64Url).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(base64)
  },
  b64EncodeUnicode: function (str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  },



  b64DecodeUnicode: function (str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  },

  urlParse: function (value, type) {
    var dizi = []
    var param = value.split('&')
    param.forEach(function (row, index) {
      if (row.indexOf('=') > 0) {
        var value = row.split('=')

        dizi.push({
          PropertyName: value[0],
          Operation: value[1].split(',').length > 1 ? 'IN' : 'EQ',
          PropertyValue: value[1]
        })
      } else if (row.indexOf('<') > 0) {
        var value = row.split('<')
        dizi.push({
          PropertyName: value[0],
          Operation: 'LT',
          PropertyValue: value[1]
        })
      } else if (row.indexOf('>') > 0) {
        var value = row.split('>')
        dizi.push({
          PropertyName: value[0],
          Operation: 'GT',
          PropertyValue: value[1]
        })
      } else if (row.indexOf('%') > 0) {
        var value = row.split('%')
        dizi.push({
          PropertyName: value[0],
          Operation: 'CT',
          PropertyValue: value[1]
        })
      } else if (row.indexOf('-') > 0) {
        var value = row.split('-')
        dizi.push({
          PropertyName: value[0],
          Operation: 'NE',
          PropertyValue: value[1]
        })
      } else if (row.indexOf('!') > 0) {
        var value = row.split('!')
        if (type == 'N') {
          value[1] = parseFloat(value[1])
        }
      }
    })
    return dizi
  },
  readFileToBase64: function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader()
      reader.onload = function (e) {
        var binaryFile = ''
        var base64File
        if (typeof reader.readAsBinaryString === 'undefined') {
          var bytes = new Uint8Array(e.target.result)
          for (var i = 0; i < bytes.byteLength; i++) {
            binaryFile += String.fromCharCode(bytes[i])
          }
          base64File = btoa(binaryFile)
        } else {
          base64File = btoa(e.target.result)
        }
        var data = {
          name: file.name,
          type: file.type != null ? file.type : file.name.split('.').pop(),
          size: file.size.toString(),
          base64: base64File
        }
        resolve(data)
      }
      if (typeof reader.readAsBinaryString !== 'undefined') {
        reader.readAsBinaryString(file)
      } else {
        reader.readAsArrayBuffer(file)
      }
    })
  }

}
export default Component
