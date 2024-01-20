import type { ButtonProps } from 'antd'

export interface IFormValues {
	text: string
	type: ButtonProps['type']
}

export const defaultFormValues: IFormValues = {
	text: '按钮',
	type: 'default'
}
