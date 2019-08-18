var WSProvider = {

    ajaxPost: function(serviceName, jsonParams) {
    debugger
        var deferred = new Promise(function(resolve, reject) {
            // eslint-disable-next-line no-undef
            return $.ajax({
                type: 'POST',
                url: "http://localhost/elibrarybackend/Request.php",
                datatype: 'application/json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                data: jsonParams,
                success: function(result) {
                    debugger
                    if (result) {
                        resolve(result)
                    } else {
                        resolve("")
                    }
                },
                error: function(request) {
                    resolve("")
                }
            })
        })
        return deferred
    },
    ajaxGet: function(serviceName, methodName, jsonParams) {
        var deferred = new Promise(function(resolve, reject) {
            // eslint-disable-next-line no-undef
            return $.ajax({
                type: 'GET',
                url: "https://jsonplaceholder.typicode.com/posts",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                datatype: 'application/json',
                success: function(result) {
                    resolve(result)
                },
                error: function(request) {
                    resolve(false)
                }
            })
        })
        return deferred
    },
    ajaxDelete: function(serviceName, jsonParams) {
        var deferred = new Promise(function(resolve, reject) {
            // eslint-disable-next-line no-undef
            return $.ajax({
                type: 'DELETE',
                url: serviceName,
                datatype: 'application/json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                success: function(result) {
                    if (result) {
                        resolve(result)
                    } else {
                        resolve('')
                    }
                },
                error: function(request) {}
            })
        })
        return deferred
    }
}
export default WSProvider
