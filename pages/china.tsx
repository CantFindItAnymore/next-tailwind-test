import React, { FC, useEffect, useRef } from 'react'
import { init, registerMap } from 'echarts'

import Layout from '../components/Layout'
import styles from './china.module.css'

const chinaJson = require('../jsonData/china.json')

const China: FC = () => {
	const echartsRef = useRef<HTMLDivElement>(null)

	const chinaOption = {
		backgroundColor: '#fff',
		// title: {
		// 	top: 20,
		// 	text: '全国地图',
		// 	subtext: '',
		// 	x: 'center',
		// 	textStyle: {
		// 		color: '#000',
		// 	},
		// },
		//提示框组件
		// tooltip: {
		// 	trigger: 'item',
		// },
		//地理坐标系组件
		geo: {
			type: 'map',
			map: 'china', //地图名称
			roam: false, //是否开启鼠标缩放和平移漫游
			zoom: 1.1, //当前视角的缩放比例
			label: {
				normal: {
					//默认
					textStyle: {
						color: '#000000', //字体颜色
					},
				},
			},
			itemStyle: {
				//地图区域的多边形 图形样式
				normal: {
					areaColor: 'rgba(180,213,228)', //地图区域的颜色
					borderColor: '#fff', //图形的描边颜色
				},
				emphasis: {
					areaColor: 'rgba(103,171,201)',
				},
			},
		},
		//用于地理区域数据的可视化，配合 visualMap 组件
		series: [
			{
				type: 'effectScatter', //散点气泡
				// name: 'scatterName',
				coordinateSystem: 'geo', //使用地理坐标系
				// symbol: 'arrow', //标记的图形
				symbolSize: 20, //标记的大小
				encode: { value: 2 },
				// encode: {
				// 	lat: '126.642464',
				// 	lng: '45.756967',
				// },
				label: {
					show: true,
					fontSize: 14,
					fontWeight: 400,
					color: '#484848',
					formatter: (params: any) => {
						return '成都'
					},
				},
				data: [{ name: '成都', value: [104.065735, 30.659462] }],
			},

			{
				type: 'effectScatter', //散点气泡
				// name: 'scatterName',
				coordinateSystem: 'geo', //使用地理坐标系
				// symbol: 'arrow', //标记的图形
				symbolSize: 20, //标记的大小
				encode: { value: 2 },
				// encode: {
				// 	lat: '126.642464',
				// 	lng: '45.756967',
				// },
				label: {
					show: true,
					fontSize: 14,
					fontWeight: 400,
					color: '#484848',
					formatter: (params: any) => {
						return '北京'
					},
				},
				data: [{ name: '北京', value: [116.405285, 39.904989] }],
			},

			{
				type: 'effectScatter', //散点气泡
				// name: 'scatterName',
				coordinateSystem: 'geo', //使用地理坐标系
				// symbol: 'arrow', //标记的图形
				symbolSize: 20, //标记的大小
				encode: { value: 2 },
				// encode: {
				// 	lat: '126.642464',
				// 	lng: '45.756967',
				// },
				label: {
					show: true,
					fontSize: 14,
					fontWeight: 400,
					color: '#484848',
					formatter: (params: any) => {
						return '上海'
					},
				},
				data: [{ name: '上海', value: [121.472644, 31.231706] }],
			},

			{
				type: 'effectScatter', //带有涟漪特效动画的散点气泡
				// name: 'effectScatterName',
				coordinateSystem: 'geo', //使用地理坐标系
				symbolSize: 20, //标记的大小
				encode: { value: 2 },
				label: {
					show: true,
					fontSize: 12,
					fontWeight: 400,
					color: '#484848',
					formatter: (params: any) => {
						return '广州'
					},
				},

				data: [{ name: '广州', value: [113.2442, 23.42592] }],
			},
			{
				type: 'effectScatter', //带有涟漪特效动画的散点气泡
				// name: 'effectScatterName',
				coordinateSystem: 'geo', //使用地理坐标系
				symbolSize: 20, //标记的大小
				encode: { value: 2 },
				label: {
					show: true,
					fontSize: 12,
					fontWeight: 400,
					color: '#484848',
					formatter: (params: any) => {
						return '深圳'
					},
				},

				data: [{ name: '深圳', value: [115.679901, 23.087862] }],
			},
		],
	}

	useEffect(() => {
		if (echartsRef.current) {
			let myChart = init(echartsRef.current) //创建实例
			registerMap('china', chinaJson) //注册可用的地图（不可缺少）

			myChart.setOption(chinaOption)
		}
	})

	return (
		<Layout>
			<div className={styles.china} ref={echartsRef} />
		</Layout>
	)
}

export default China
