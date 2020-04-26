import React from "react";
import { StyledButton } from 'components/CustomButtons';
import Button from '@material-ui/core/Button';

export default function LoginPage() {
    return (
        <div>
            <Button>Default</Button>
            <StyledButton>StyledButton</StyledButton>
            로그인페이지입니다.
        </div>
    )
}