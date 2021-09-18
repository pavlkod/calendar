import { FC } from 'react'
import { Form, Input, Button, Spin, Alert } from 'antd';

import styles from './index.module.css'
import { rules } from '../../utils/rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creators';
import { IUser } from '../../models/IUser';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const {isLoading, error} = useTypedSelector(state => state.auth)
    const onFinishHandler = (values: IUser) => {
        const {username, password } = values
        dispatch(AuthActionCreators.login(username, password ))
    }

    return (
        <Form name="basic"
            labelCol={{ span: 11 }}
            wrapperCol={{ span: 13 }}
            className={styles.form}
            onFinish={onFinishHandler}
        >
            {error && <Alert
                message={error}
                type="error"
            />
            }
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите имя пользователя!')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Введите пароль!')]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
