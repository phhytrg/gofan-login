import { useCallback } from 'react';
import { Button, Column, Grid, PasswordInput, TextInput } from '@carbon/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

// assets & styles
import playOnLogo from '../assets/there-for-every-moment-light.png';
import graduation from '../assets/graduation.png';
import companyLogos from '../assets/company-logos.png';
import './LoginForm.scss';
import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

interface LoginFormInput {
  email: string;
  password: string;
}

const useYupValidationResolver = (
  validationSchema: yup.ObjectSchema<LoginFormInput>,
) => {
  return useCallback(
    async (data: LoginFormInput) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (errors: any) {
        return {
          values: {},
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          errors: errors.inner.reduce((allErrors: any, currentError: any) => {
            return {
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            };
          }, {}),
        };
      }
    },
    [validationSchema],
  );
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email can't be empty"),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    )
    .matches(
      /(?=.*[a-z])/,
      'Password must contain at least one lowercase letter',
    )
    .matches(
      /(?=.*[!@#$%^&*])/,
      'Password must contain at least one special character',
    )
    .required("Password can't be empty"),
});

const LoginForm = () => {
  const { register, formState, handleSubmit } = useForm<LoginFormInput>({
    resolver: useYupValidationResolver(validationSchema),
  });

  const { user, login } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }
  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    await login(data);
  };

  return (
    <div className="login-mask">
      <img src={playOnLogo} />
      <div className="container">
        <Grid condensed>
          <Column sm={'100%'} lg={8}>
            <form
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              aria-label="form"
            >
              <h2>Log In</h2>
              <p>
                Need a GoFan account?&nbsp;
                <a href="#">Create an account</a>
              </p>
              <TextInput
                {...register('email')}
                id={'email'}
                labelText={'Email'}
                invalid={!!formState.errors.email}
                invalidText={formState.errors.email?.message}
              />
              <PasswordInput
                {...register('password')}
                data-testid={'password-input'}
                id={'password'}
                labelText={'Password'}
                className={formState.errors.password && 'error-input'}
                invalid={!!formState.errors.password}
                invalidText={formState.errors.password?.message}
              />
              <Button className="login-btn" type="submit">
                Log In
              </Button>
              <a className="forgot-password-link" href="#">
                Forgot password
              </a>
              <p id="center" className="view-mobile">
                On a mobile device? <a>View mobile HQ</a>
              </p>
              <img
                src={companyLogos}
                style={{
                  objectFit: 'contain',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
              <p className="footer">
                2015-2025 Huddle Tickets LLC, All Rights Reserved <br />
                v2024.06.17
              </p>
            </form>
          </Column>
          <Column sm={0} lg={8}>
            <img
              src={graduation}
              style={{
                objectFit: 'fill',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Column>
        </Grid>
      </div>
    </div>
  );
};

export default LoginForm;
