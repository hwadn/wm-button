import React from 'react'
import { Form, Input, Select, ButtonProps } from 'antd'
import { FormProps } from 'antd/lib/form'
import { defaultFormValues } from './default'

export type { IFormValues } from './default'
export { defaultFormValues } from './default'

interface ISettingProps {
	onValuesChange: FormProps['onValuesChange']
}

const antdButtonTypes: ButtonProps['type'][] = ['dashed', 'default', 'link', 'primary', 'text']

export const Setting: React.FC<ISettingProps> = ({ onValuesChange }) => {
	return (
		<Form onValuesChange={onValuesChange} initialValues={defaultFormValues}>
			<Form.Item label='文本' name='text' >
				<Input/>
			</Form.Item>
			<Form.Item label='样式' name='type' >
				<Select options={antdButtonTypes.map((type) => ({
					value: type,
					label: type
				}))}/>
			</Form.Item>
		</Form>
	)
}
