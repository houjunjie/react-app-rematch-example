import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StyledForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & .login-form {
    max-width: 300px;
  }
  & .login-form-forgot {
    float: right;
  }
  & .login-form-button {
    width: 100%;
  }
`

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.asyncLogin(values).then((res) => {
          localStorage.setItem('Token', res.token)
          window.location.href = '/'
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledForm>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link to="/">Forgot password</Link>

            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/">register now!</Link>
          </Form.Item>
        </Form>
      </StyledForm>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

NormalLoginForm.propTypes = {
  userInfo: PropTypes.object,
  loading: PropTypes.object,
  asyncLogin: PropTypes.func,
};

const mapState = (state) => {
  return {
    userInfo: state.login.userInfo,
    loading: {
      global: state.loading.global
    },
  };
};

const mapDispatch = (dispatch) => {
  return {
    asyncLogin: dispatch.login.asyncLogin,
  };
};

export default connect(mapState, mapDispatch)(Login);