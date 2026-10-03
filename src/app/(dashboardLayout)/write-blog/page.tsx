import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { Field, FieldGroup, FieldLabel } from '../../../../@/components/ui/field';
import { Input } from '../../../../@/components/ui/input';
import { cookies } from 'next/headers';
import ClientForm from '../../../components/user/createblogFormClient';

const Write_blog = () => {
   return (
    <ClientForm></ClientForm>
   )
};

export default Write_blog;