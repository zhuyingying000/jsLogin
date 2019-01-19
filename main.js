function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username === '') {
        alert("用户名不能为空")
        return
    }

    if (password.length < 6) {
        alert("密码必须要为6位数")
        return
    }


    const param = new URLSearchParams()
    param.append('username', username)
    param.append('password', password)

    const ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                alert('登录成功')

            } else {
                alert('登录失败')
            }
        }
    }
    ajax.open('post', 'http://127.0.0.1:7001/login', true)

    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    ajax.send(param.toString())

}

