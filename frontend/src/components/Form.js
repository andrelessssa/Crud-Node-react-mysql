import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCCCCC;
    border-radius: 5px;
    

    

`;
const ImputArea = styled.div`
    display: flex;
    flex-direction: column;
`;
const Imput = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #BBBBBB;
    border-radius: 5px;
    height: 40px;
`;
const Label = styled.label`

`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2C73D2;
    color: white;
    height: 42px;

`;

const Form = ( { onEdit } ) => {
    const ref = useRef();
    return(
        <FormContainer ref={ref}>
            <ImputArea>
                <Label>Nome</Label>
                <Imput name = "nome"/>
            </ImputArea>

            <ImputArea>
                <Label>Email</Label>
                <Imput name = "email" type="email"/>
            </ImputArea>

            <ImputArea>
                <Label>Telefone</Label>
                <Imput name = "fone" />
            </ImputArea>

            <ImputArea>
                <Label>Data de Nascimento</Label>
                <Imput name = "data_nascimento"  />
            </ImputArea>

         
            <Button type = "submit">SALVAR</Button>

        </FormContainer>

    );
};
export default Form;