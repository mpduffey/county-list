import {Component} from '@angular/core';
import {Grid, Column} from 'modules/grid/grid';

@Component({
	selector:			'county-profile',
	template:			`
		<h1>Wisconsin Counties</h1>
		<grid [rows]="counties" [columns]="columns"></grid>
	`,
	directives:		[Grid]
})

export class CountyList {
	columns = [];
	counties = [
		{
			name:				"Waukesha",
			DMA:				"Milwaukee",
			VAP:				303917,
			VoteGoal:		177615,
			May2016RJ:	148032
		},
		{
			name:				"Ozaukee",
			DMA:				"Milwaukee",
			VAP:				303917,
			VoteGoal:		177615,
			May2016RJ:	148032
		}
	];
	constructor() {
		this.columns.push(new Column('name','County'));
		this.columns.push(new Column('DMA','Media Market'));
		this.columns.push(new Column('VAP','VAP'));
	}
}