import React, { useState } from 'react'

function Example2() {
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [job, setJob] = useState('web前端')
    return (
        <div>
            <p>我的年龄:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作:{job}</p>
        </div>
    )
}

export default Example2;