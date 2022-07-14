var rule = "1"
var numlist1 = [];
var numlist2 = [];
var numlist3 = [];
var titlelist1 = [];
var titlelist2 = [];
var titlelist3 = [];
var maxlevel1 = 1;
var maxlevel2 = 11;
var maxlevel3 = 3;
url1 = "mission1.csv";
url2 = "mission2.csv";
url3 = "mission3.csv";
var missionlist1, missionlist2, missionlist3;
getCSV();
var checkedlist = [];
var highcheckedlist = [];
makeCheckList(rule);
var size = 5;
var bingo = [[" ","1","2","3","4","5","6","7","8","9","10"],
				 ["A"," "," "," "," "," "," "," "," "," "," "],
		  		 ["B"," "," "," "," "," "," "," "," "," "," "],
				 ["C"," "," "," "," "," "," "," "," "," "," "],
				 ["D"," "," "," "," "," "," "," "," "," "," "],
				 ["E"," "," "," "," "," "," "," "," "," "," "],
				 ["F"," "," "," "," "," "," "," "," "," "," "],
				 ["G"," "," "," "," "," "," "," "," "," "," "],
				 ["H"," "," "," "," "," "," "," "," "," "," "],
				 ["I"," "," "," "," "," "," "," "," "," "," "],
				 ["J"," "," "," "," "," "," "," "," "," "," "]];
var colors = [[0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0]];
var rednum = 0;
var bluenum = 0;
var table = document.createElement('table');
table.border = "1px";
table.style = "border-collapse: collapse; font-size: 15px";
makeTable();

function getCSV(url){
  var txt = new XMLHttpRequest();
  txt.open('get', url1, false);
  txt.send();
  var arr = txt.responseText.split('\n');
  for (var i=0;i<arr.length;)
  {
	  str = arr[i];
	  if(str.charAt(0)=="#")
	  {
		  numlist1.push(i);
		  titlelist1.push(arr[i]);
		  arr.splice(i,1);
	  }else{
		  i++;
	  }
  }
  numlist1.push(arr.length-1);
  var res = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == '') break;
    res[i] = arr[i].split(',');
  }
  missionlist1 = res;
}

function makeTable()
{
	for(var i=0;table.rows.length>0;i++)
	{
		table.deleteRow(-1);
	}
	for (var i=0;i<size+1;i++) {
		var tr = document.createElement('tr');
	  	tr.height = "100px";
	  	for (var j = 0; j < size+1; j++) {
			var td = document.createElement('td');
		  	td.textContent = bingo[i][j];
		  	if(i==0){td.height = "30px";}else{td.height = "80px";}
		  	if(j==0){td.width = "30px";}else{td.width = "150px";}
		  	td.align = "center";
			td.id = "td" + i + j;
			if(i!=0&&j!=0){td.onclick = function(){clickTable(this)}}
		  	tr.appendChild(td);
	  }
	  table.appendChild(tr);
	}
	// 生成したtable要素を追加する
	maintable = document.getElementById('maintable');
	maintable.appendChild(table);
}

function makeCheckList()
{
	str = "";
	if(rule=="1")
	{
		str += "<b>ミッション一覧</b><br>";
		for(var lv=1;lv<=maxlevel1;lv++)
		{
			str += "<ul>";
			for(var i=numlist1[lv-1];i<numlist1[lv];i++)
			{
				if(lv<=3)
				{
					str += "<li>" + missionlist1[i][0] + "</li>";
				}
			}
			str += "</ul>"
		}
	}
	document.getElementById('checklist').innerHTML = str;
}

function makeBingo()
{
	var ccount = 0;
	checkedlist = [];
	highchekedlist = [];
	if(rule=="1")
	{
		for(i=0;i<numlist1[maxlevel1];i++)
		{
			box = document.getElementById("checkbox" + i);
			if(true)
			{
				checkedlist.push(missionlist1[i][0]);
				ccount++;
			}
		}
	}
	var r = 0;
	for(i=1;i<=size;i++)
	{
		for(j=1;j<=size;j++)
		{
			if(rule!="3"||(i>1&&i<size)||(j>1&&j<size))
			{
				r = Math.floor(Math.random()*checkedlist.length);
				bingo[i][j] = checkedlist[r];
				checkedlist.splice(r,1);
			}
		}
	}
	colors = [[0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0,0,0]];
	makeTable();
	rednum = 0;
	bluenum = 0;
}

function clickTable(obj,i,j)
{
	row = obj.id.charAt(2);
	col = obj.id.charAt(3);
	if(colors[row][col]==0)
	{
		obj.style.background = "#ffcccc";
		colors[row][col] = 1;
		rednum += 1;
	} else if(colors[row][col]==1) {
		obj.style.background = "#ffffff";
		colors[row][col] = 0;
		rednum -= 1;
	}
}