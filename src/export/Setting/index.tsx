import React from 'react'
import { Form, Input, Select, ButtonProps } from 'antd'
import { FormProps } from 'antd/lib/form'

export type { IFormValues } from './default'
export { defaultFormValues } from './default'

interface ISettingProps {
	initialValues: FormProps['initialValues']
	onValuesChange: FormProps['onValuesChange']
}

const antdButtonTypes: ButtonProps['type'][] = ['dashed', 'default', 'link', 'primary', 'text']

export const Setting: React.FC<ISettingProps> = ({ onValuesChange, initialValues }) => {
	return (
		<Form onValuesChange={onValuesChange} initialValues={initialValues}>
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
