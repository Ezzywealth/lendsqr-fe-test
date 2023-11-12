import React from 'react';
import { LineWave } from 'react-loader-spinner';

type Props = {
	color: string;
};
const LineWaveLoader = ({ color }: Props) => {
	return (
		<div>
			<LineWave height='50' width='50' color={color} ariaLabel='line-wave' wrapperStyle={{}} wrapperClass='' visible={true} firstLineColor='' middleLineColor='' lastLineColor='' />
		</div>
	);
};

export default LineWaveLoader;
