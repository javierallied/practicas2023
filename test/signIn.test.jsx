import { afterEach, describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent  } from "@testing-library/react";
import SignInForm from '../src/components/SignInForm'

describe("SignIn", () =>{
    afterEach(cleanup);

    it('should render', () => {
        render(<SignInForm/>)
    })

    it('should render title correctly', () =>{
        render(<SignInForm/>)
        screen.getByText('Log In');
    })

    it('should render input type text', ()=>{
        render(<SignInForm/>)
        screen.getByRole('textbox');
    })

    it('should render a button', ()=>{
        render(<SignInForm/>)
        screen.getByRole('button');
    })
    it('should update username state when input value changes', () => {
        render(<SignInForm />);
        const input = screen.getByPlaceholderText('Username');
        fireEvent.change(input, { target: { value: 'a' } });
        expect(input.value).toBe('a');
      });

      it('should update password state when input value changes', () => {
        render(<SignInForm />);
        const input = screen.getByPlaceholderText('Password');
        fireEvent.change(input, { target: { value: 'a' } });
        expect(input.value).toBe('a');
      });
    
})