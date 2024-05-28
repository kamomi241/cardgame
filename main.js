var canvas = document.getElementById( 'canvas' );

const width = 1500;
const height = 720;

const BGM = new Audio('bgm.mp3');
BGM.loop = true;
var bgmtr = false;
//画像
//
const image = new Image();
const title = new Image();
const mamoru = new Image();
const menu = new Image();
const clear = new Image();
const over = new Image();
const cardback = new Image();
const gameover = new Image();
const gameclear = new Image();
const hunger = new Image();
const fire = new Image();
const uma = new Image();
const sandan = new Image();
const konpei = new Image();
const water = new Image();
const hotoke = new Image();
const turnmoji = new Image();
const CardgameImage = new Image();
const kiyosujyou = new Image();
const inuyamajyou = new Image();
const nisiojyou = new Image();
const nagoyajyou = new Image();
const asahijyou = new Image();
const okazakijyou = new Image();
const nagasinojyou = new Image();

const playerimage = new Array();
const blockimage = new Array();
const barimage = new Array();
const blockcastle = new Array();


for(let i = 0;i<7;i++) {
	playerimage[i] = new Image();
	blockimage[i] = new Image();
	barimage[i] = new Image();
	blockcastle[i] = new Image();
}

const ImageNumber = new Array();
for (let i = 0; i < 10; i++){
	ImageNumber[i] = new Image();
}

const CardImage = new Array();	
for (i = 0; i < 120; i++){
	CardImage[i] = new Image();
}

const damageSE = new Audio();
const healSE = new Audio();
const deffenceSE = new Audio();

let AllImage = [
	image, mamoru, menu,  cardback, gameover, gameclear, hunger, fire, uma, sandan, konpei
	, water, hotoke, turnmoji, CardgameImage, kiyosujyou, inuyamajyou, nisiojyou, nagoyajyou, asahijyou, okazakijyou, nagasinojyou
	,damageSE, healSE, deffenceSE];

AllImage = AllImage.concat(ImageNumber,playerimage,blockimage,barimage,blockcastle);
let AllImageCard = [1,2,3,11,12,21,22,31,32,41,42,43,44,45,46,47,48,71,72,81,82,83,84,85,86,101,102,103,104,105]
for (let i = 0; i < AllImageCard.length;i++)
{
	AllImage.push(CardImage[AllImageCard[i]]);
}
//console.log(AllImage.length);

setLoadAllCallback(AllImage,AllImage.length);

hunger.src = "icon/hunger.png"
fire.src = "icon/fire.png"
uma.src = "icon/uma.png"
sandan.src = "icon/sandan.png"
konpei.src = "icon/konpei.png"
water.src = "icon/water.png"
hotoke.src = "map/hotoke.png"
CardgameImage.src = "card.png";
gameover.src = "map/gameclear.jpg";
gameclear.src = "map/gameover.jpg";
ImageNumber[0].src = "number/0.png"
ImageNumber[1].src = "number/1.png"
ImageNumber[2].src = "number/2.png"
ImageNumber[3].src = "number/3.png"
ImageNumber[4].src = "number/4.png"
ImageNumber[5].src = "number/5.png"
ImageNumber[6].src = "number/6.png"
ImageNumber[7].src = "number/7.png"
ImageNumber[8].src = "number/8.png"
ImageNumber[9].src = "number/9.png"
kiyosujyou.src = "castle/kiyosujyou.png";
inuyamajyou.src = "castle/inuyamajyou.png";
nisiojyou.src = "castle/nisiojyou.png";
nagoyajyou.src = "castle/nagoyajyou.png";
asahijyou.src = "castle/asahijyou.png";
okazakijyou.src = "castle/okazakijyou.png";
nagasinojyou.src = "castle/nagasinojyou.png";
CardImage[1].src = "card/at1.png";
CardImage[2].src = "card/at2.png";
CardImage[3].src = "card/at3.png";
CardImage[11].src = "card/at11.png";
CardImage[12].src = "card/at12.png";
CardImage[21].src = "card/at21.png";
CardImage[22].src = "card/at22.png";
CardImage[31].src = "card/at31.png";
CardImage[32].src = "card/at32.png";
CardImage[41].src = "card/d41.png";
CardImage[42].src = "card/d42.png";
CardImage[43].src = "card/d43.png";
CardImage[44].src = "card/d44.png";
CardImage[45].src = "card/d45.png";
CardImage[46].src = "card/d46.png";
CardImage[47].src = "card/d47.png";
CardImage[48].src = "card/d48.png";
CardImage[71].src = "card/d71.png";
CardImage[72].src = "card/d72.png";
CardImage[81].src = "card/sp81.png";
CardImage[82].src = "card/sp82.png";
CardImage[83].src = "card/sp83.png";
CardImage[84].src = "card/sp84.png";
CardImage[85].src = "card/sp85.png";
CardImage[86].src = "card/sp86.png";
CardImage[101].src = "card/f101.png";
CardImage[102].src = "card/f102.png";
CardImage[103].src = "card/f103.png";
CardImage[104].src = "card/f104.png";
CardImage[105].src = "card/f105.png";
image.src = "map/siiro.png";
mamoru.src = "map/battle.png";
menu.src = "map/menu.png"
cardback.src = "map/cardback.png"
playerimage[0].src = "map/kiyosu.png";
playerimage[1].src = "map/inuyama.png";
playerimage[2].src = "map/nisio.png";
playerimage[3].src = "map/nagoya.png";
playerimage[4].src = "map/asahi.png";
playerimage[5].src = "map/okazaki.png";
playerimage[6].src = "map/nagasino.png";
blockcastle[0].src = "map/blockkiyosu.png";
blockcastle[1].src = "map/blockinuyama.png";
blockcastle[2].src = "map/blocknisio.png";
blockcastle[3].src = "map/blocknagoya.png";
blockcastle[4].src = "map/blockasahi.png";
blockcastle[5].src = "map/blockokazaki.png";
blockcastle[6].src = "map/blocknagasino.png";
barimage[0].src = "map/blubar.png";
barimage[1].src = "map/redbar.png";
barimage[2].src = "map/yelowbar.png";
barimage[3].src = "map/graybar.png";
barimage[4].src = "map/perplebar.png";
barimage[5].src = "map/greenbar.png";
barimage[6].src = "map/blawnbar.png";
blockimage[0].src = "map/blu.png";
blockimage[1].src = "map/red.png";
blockimage[2].src = "map/yelow.png";
blockimage[3].src = "map/gray.png";
blockimage[4].src = "map/perple.png";
blockimage[5].src = "map/green.png";
blockimage[6].src = "map/blawn.png";
turnmoji.src = "map/tern.png"

damageSE.src = "damage.mp3"
healSE.src = "heal.mp3"
deffenceSE.src = "def.mp3"

//

//メインループ開始
//画像読込待ち
function setLoadAllCallback(elems,num) {
    var count = 0;
    for (var i = 0; i < num; ++i) {
        elems[i].onload = function() {
            ++count;
			//console.log(count);
			//console.log(elems[count]);
            if (count == num) {
                main()
            }
        };
    }
}

var before = 10000;
var tern;
flag  = true;
time = 0;
nowtime = 0;
var y;
npcflag = true;
b = 1;
scroolmovex = 0;
var imagexs = [];
var	imagex = [];
var	imagey = [];

image.addEventListener("load",function() {
    ctx.drawImage(image,0,0);
})


var gamestates = 0;
//タイトル 0
//ゲーム画面 1
//ゲームクリア 2
//ゲームオーバー 3
//esc 4
//初期化 5
var cardGameState = 0;
//ゲーム終了 0
//攻撃ターン 1
//防御ターン 2
//土r− 3
//キャンバス管理変数
canvas.width = width;		
canvas.height = height;	
var ctx = canvas.getContext( '2d' );

var cpu;

/*//画像表示
var rico = new Object();
rico.img = new Image();
rico.img.src = 'img/rico.png';
rico.x = 0;
rico.y = 0;
*/

const DeckKen = [1,2];
const DeckYari = [11,12];
const DeckNaginata = [21,22];
const DeckHinawa = [31,32];
const DeckBougu = [41,42,43,44,45,46,47,48];
const DeckBouguSpecial = [71];
const DeckFood = [101,102,103,104];

const DeckStrategy = [81,82,83,84,85,86];
//城のパッシブで増える確率25%

const DeckSecret = [3,105,72];//2%

var DeckDefault = DeckKen.concat(DeckYari,DeckNaginata,DeckHinawa
	,DeckBougu,DeckBouguSpecial,DeckFood);

var NPCAttack = DeckKen.concat(DeckYari,DeckNaginata,DeckHinawa,DeckFood);
var NPCAttackSecret = [3,105];
var NPCBlock = DeckBougu.concat(DeckBouguSpecial,72);

//線表示
//var liney = 0;

//マウスインプット系
var input = new Object();
input.mouseX = 0;
input.mouseY = 0;

input.mouseIsDownRaw = false;
input.mouseIsDown = false;
input.mouseIsDownOld = false;
input.mouseIsClicked = false;

//キーボードイベント
var keyInput = new Object();
keyInput.a1 = false;
keyInput.a2 = false;
keyInput.a3 = false;
keyInput.a4 = false;
keyInput.a5 = false;
keyInput.a6 = false;

class AttackIns{
    constructor(CardNo,aAttacker,aTarget){
        this.CardNo = CardNo;
        this.aAttacker = aAttacker;
        this.aTarget = aTarget;
		this.attackOwnerOld = castle[aAttacker].owner;
    }
}
var attackSave = [];

class StateBuff{

	constructor(turn,bID,BuffTarget,BuffAttacker){
		this.remainTurn = turn;
		this.buffID = bID;
		this.BuffTarget = BuffTarget;
		this.BuffAttacker = BuffAttacker;
	}

	updata(){
		if (this.buffID == 2 && this.remainTurn > 0){
			castle[this.BuffTarget].hp -= 5;
			if (castle[this.BuffTarget].hp < 1)
			{
				if (castle[this.BuffTarget].owner == castle[this.BuffAttacker].owner)
				{
					castle[this.BuffTarget].hp = 1;
				}
				else{
				castle[this.BuffTarget].owner.giveCastle(castle[this.BuffTarget],castle[this.BuffAttacker].owner);
				castle[this.BuffTarget].hp = 25;
				}
			}
		}

		if (this.buffID == 3 && this.remainTurn > 0){
			castle[this.BuffTarget].hp -= 3;
			if (castle[this.BuffTarget].hp < 1)
			{
				if (castle[this.BuffTarget].owner == castle[this.BuffAttacker].owner)
				{
					castle[this.BuffTarget].hp = 1;
				}
				else{
				castle[this.BuffTarget].owner.giveCastle(castle[this.BuffTarget],castle[this.BuffAttacker].owner);
				castle[this.BuffTarget].hp = 25;
				}
			}
		}
		this.remainTurn--;
	}
}
var buffSave = [];

class Castle {
	constructor(hp,name,owner){
		this.hp = hp;
		this.owner = owner;
		this.name = name;
	}

	debuginfo(posx,posy){
		ctx.fillText( this.name +" 所有者: "+ this.owner.name+ " HP: " + this.hp, posx,posy );
	}

	damage(damage,target){
		target.hp -= damage;
		if (target.hp < 0)
		{
			target.owner.giveCastle(target,this.owner);
		}
	}

	
}

class Player {
	constructor(name){
		this.isdead = false;
		this.name = name;
		this.CastleList = [];
	}

	setCastle(castle){
		castle.owner = this;
		this.CastleList.push(castle);
	}

	giveCastle(castle,target){
		if (castle.owner === this && this != target)
		{
			var index = this.CastleList.indexOf(castle);
			this.CastleList.splice(index, 1);
			target.CastleList.push(castle);
			castle.owner = target;
			DefaultDeckAdd();
		}
	}

	debuginfo(posx,posy){
		ctx.fillText( this.name + " 城の数: " + this.CastleList.length , posx,posy );
	}
}


//自分の手札
var player = new Object();
player.card = [];
var player1 = new Player('プレイヤー');
var npc = [];
npc[0] = new Player('NPC1');
npc[1] = new Player('NPC2');
npc[2] = new Player('NPC3');
npc[3] = new Player('NPC4');
npc[4] = new Player('NPC5');
npc[5] = new Player('NPC6');
var castle = []
castle[0] = new Castle(40,'城1',player1);
castle[1] = new Castle(40,'城2',npc[0]);
castle[2] = new Castle(40,'城3',npc[1]);
castle[3] = new Castle(40,'城4',npc[2]);
castle[4] = new Castle(40,'城5',npc[3]);
castle[5] = new Castle(40,'城6',npc[4]);
castle[6] = new Castle(40,'城7',npc[5]);




//メインループ
function main() {
	addEventListener("mousemove",MousePosFunc,false);
	addEventListener("mousedown",MouseDownFunc,false);
	addEventListener("mouseup",MouseUpFunc,false);
	document.addEventListener('keypress', KeyPressFunc,false);
	document.addEventListener('keyup', KeyUpFunc,false);

	input.mouseIsDownOld = input.mouseIsDown;
	input.mouseIsDown = input.mouseIsDownRaw;
	input.mouseIsClicked = false;
	if (input.mouseIsDown  == true &&input.mouseIsDownOld == false )
		input.mouseIsClicked = true;
	

		if (gamestates != 4){
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillRect(0,0,width,height);
		}

	if (gamestates == 0){
		gamestates =5;
	}
	else if (gamestates == 1){
		CardGame();
	}
	else if(gamestates == 2) {
		GameClear();
	}
	else if(gamestates == 3) {
		GameOver();
	}
	else if(gamestates == 4) {
		Menu();
	}
	else if(gamestates == 5) {
		GameInitialize();
	}
	requestAnimationFrame( main );
}
//メインループ開始
//フォント
addEventListener('load', main(), false);

function MousePosFunc( event ){
	input.mouseX = event.pageX;
	input.mouseY = event.pageY;
}

function MouseUpFunc( event ){
	input.mouseX = event.pageX;
	input.mouseY = event.pageY;
	if (input.mouseIsDownRaw == true){
		input.mouseIsDownRaw = false;
	}
	if (bgmtr == false)
    {
        bgmtr = true;
        BGM.play();
		BGM.volume = 0.05;
    }
}

function MouseDownFunc( event ){
	input.mouseX = event.pageX;
	input.mouseY = event.pageY;
	if (input.mouseIsDownRaw == false){
		input.mouseIsDownRaw = true;
	}
}

window.onmousewheel = function( event ) {
	if(!(scroolmovex <= - (player.card.length - 1) * 175 && event.wheelDelta < 0) && !(scroolmovex >= 1320 && event.wheelDelta > 0)) {
		scroolmovex += event.wheelDelta;
		for(i = 0; i < player.card.length;i++) {
			imagex[i] += event.wheelDelta;
		}
	}
}

document.addEventListener('keydown',function(esc) {
	if(esc.key === 'Escape' && gamestates != 4) {
		gamestates = 4;
		ctx.drawImage(menu,0,0);
	}
})

function KeyPressFunc(e) {
	if(e.key === '1'){
		keyInput.a1 = true;
	}
	if(e.key === '2'){
		keyInput.a2 = true;
	}
	if(e.key === '3'){
		keyInput.a3 = true;
	}
	if(e.key === '4'){
		keyInput.a4 = true;
	}
	if(e.key === '5'){
		keyInput.a5 = true;
	}
	return false; 
}

function KeyUpFunc(e) {
	if(e.key === '1'){
		keyInput.a1 = false;
	}
	if(e.key === '2'){
		keyInput.a2 = false;
	}
	if(e.key === '3'){
		keyInput.a3 = false;
	}
	if(e.key === '4'){
		keyInput.a4 = false;
	}
	if(e.key === '5'){
		keyInput.a5 = false;
	}
	return false; 
}

function Title(){
	gamestates = 5;
}

function CardGame(){
	/*
	if (input.mouseIsDown == true){
		//画像を表示
		rico.x = input.mouseX;
		rico.y = input.mouseY;
	}
	ctx.drawImage( rico.img, rico.x, rico.y );
	
	//線表示
	liney = input.mouseY;
	ctx.strokeRect(0, liney, 1500, 1)
	ctx.strokeStyle = 'red';

	//文字の設定
	ctx.fillStyle = '#fff';
	ctx.font = "24px 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";

	//文字の表示
	ctx.fillText( '山田ですだべ' + liney, 0, 24 );
	*/
	//画像
	ctx.drawImage(image,0,0);

	boxcolor(0,274,70);
	boxcolor(1,475,80);
	boxcolor(2,295,250);
	boxcolor(3,455,235);
	boxcolor(4,660,185);
	boxcolor(5,460,330);
	boxcolor(6,550,390);
	
	ctx.drawImage(kiyosujyou, 270,40);
	ctx.drawImage(inuyamajyou, 470,50);
	ctx.drawImage(nisiojyou, 290,230);
	ctx.drawImage(nagoyajyou, 445,205);
	ctx.drawImage(asahijyou, 650,155);
	ctx.drawImage(okazakijyou, 450,300);
	ctx.drawImage(nagasinojyou, 530,360);
	if(cardGameState == 2) {
		ctx.drawImage(mamoru,200,50);
	}
	
	for(i = 0;i<7;i++) {
		playercolor(i,1000,70 * i);
		ctx.drawImage(playerimage[i],1000,70 * i);
		drawNumber(castle[i].hp,1280,10 + i * 70);
		drawBuff(i);
	}
	ctx.drawImage(cardback,0,250);
	for(i = 0; i < player.card.length;i++) {
		ctx.drawImage(CardImage[player.card[i]],imagex[i] ,imagey[i] - 70);
	}
	ctx.drawImage(turnmoji,0,107)
	drawNumber(Math.floor(tern / 7),130,105)
	FontSet();	
	ctx.drawImage(hotoke,0,400);

	//player.card.forEach(element => {
	//	ctx.fillText(element,0,0);
	//});
	
	
	//選択されている城
	selectcastle = siro(input.mouseX,input.mouseY);

	if (input.mouseIsClicked == true && cardGameState ==0 &&keyInput.a3 == true)
	{
		cardGameState = 1;
	}

	else if (input.mouseIsClicked == true && cardGameState ==1 &&keyInput.a3 == true)
	{
		cardGameState = 0;
	}
	if(cardGameState == 2) {
		DiffenceTurn();
	}
	else if(cardGameState == 1) {
		if(player1.CastleList.length == 0) {
			gamestates = 3;
		}
		else if(tern / 7 < 16){
			AttackTurn();
		}
		else {
			gamestates = 2;
			for(i = 0;i < 6;i++) {
				if(player1.CastleList.length < npc[i].CastleList.length) {
					gamestates = 3;
					break;
				}
			}
		}
	}
	else if(cardGameState == 3) {
		Draw();
	}
	else {
		AttackTurn();
	}

	
}
function playercolor(number,bx,by) {
	 if(castle[number].owner == player1)ctx.drawImage(barimage[0], bx,by);
else if(castle[number].owner == npc[0]) ctx.drawImage(barimage[1], bx,by);
else if(castle[number].owner == npc[1]) ctx.drawImage(barimage[2], bx,by);
else if(castle[number].owner == npc[2]) ctx.drawImage(barimage[3], bx,by);
else if(castle[number].owner == npc[3]) ctx.drawImage(barimage[4], bx,by);
else if(castle[number].owner == npc[4]) ctx.drawImage(barimage[5], bx,by);
else if(castle[number].owner == npc[5]) ctx.drawImage(barimage[6], bx,by);
}
function boxcolor(number,bx,by) {
	     if(castle[number].owner == player1)ctx.drawImage(blockimage[0], bx,by);
	else if(castle[number].owner == npc[0]) ctx.drawImage(blockimage[1], bx,by);
	else if(castle[number].owner == npc[1]) ctx.drawImage(blockimage[2], bx,by);
	else if(castle[number].owner == npc[2]) ctx.drawImage(blockimage[3], bx,by);
	else if(castle[number].owner == npc[3]) ctx.drawImage(blockimage[4], bx,by);
	else if(castle[number].owner == npc[4]) ctx.drawImage(blockimage[5], bx,by);
	else if(castle[number].owner == npc[5]) ctx.drawImage(blockimage[6], bx,by);
}


function AttackTurn(){
	/*
	ctx.fillText( player1.name + " 城の数: " + player1.CastleList.length, 0, 72 );
	ctx.fillText( npc1.name+ " 城の数: " +npc1.CastleList.length, 0, 96 );
	ctx.fillText( npc2.name+ " 城の数: " +npc2.CastleList.length, 0, 120 );
	ctx.fillText( npc3.name+ " 城の数: " +npc3.CastleList.length, 0, 144 );
	ctx.fillText( npc4.name+ " 城の数: " +npc4.CastleList.length, 0, 168 );
	ctx.fillText( npc5.name+ " 城の数: " +npc5.CastleList.length, 0, 192 );
	ctx.fillText( npc6.name+ " 城の数: " +npc6.CastleList.length, 0, 214 );
	ctx.fillText( castle1.name +" 所有者: "+ castle1.owner.name, 0, 238 );
	ctx.fillText( castle2.name +" 所有者: "+ castle2.owner.name, 0, 262 );
	ctx.fillText( castle3.name +" 所有者: "+ castle3.owner.name, 0, 286 );
	ctx.fillText( castle4.name +" 所有者: "+ castle4.owner.name, 0, 310 );
	ctx.fillText( castle5.name +" 所有者: "+ castle5.owner.name, 0, 334 );
	ctx.fillText( castle6.name +" 所有者: "+ castle6.owner.name, 0, 358 );
	ctx.fillText( castle7.name +" 所有者: "+ castle7.owner.name, 0, 382 );
	*/



	if(input.mouseIsClicked == true) {
		before = handa(input.mouseX,input.mouseY);
		if(before != 10000) {
			imagexs[before] = imagex[before];
		}
	} 
	if(castle[tern % 7].owner != player1) {
		time = performance.now();
		y = 200;
		y--;
		NPCAttackUse(tern % 7);
		if(tern % 7 == 6) {
			cardGameState = 2;
		}
		tern++;
	}
	else if(input.mouseIsDown == true && before != 10000) {
		if(player.card[before] <= 40 || (80 < player.card[before] && player.card[before] < 120)) {
			imagex[before] = input.mouseX;
			imagey[before] = input.mouseY;
		}
	}
	else if(box(0,400,300,480) == true) {
		ActionDraw(1);
		tern++;
	}
	else if(input.mouseIsDown == false && before != 10000) {
		if(player.card[before] <= 40 || (80 < player.card[before] && player.card[before] < 120)) {
			if(siro(input.mouseX,input.mouseY) == 7) {
				imagex[before] = imagexs[before];
				imagey[before] = 560;
			}
			else {
				if(	UseAttackLoad(player.card[before],tern % 7,siro(input.mouseX,input.mouseY)) == false) {
					imagex[before] = imagexs[before];
					imagey[before] = 560;
				}
				else {
					imagex[before] = imagexs[before];
					imagey[before] = 560;
					player.card.splice(before,1);
					imagex.pop();
					imagey.pop();
					imagexs.pop();
					if(tern % 7 == 6) {
						cardGameState = 2;
					}
					tern++;
				}
			}
		}
		before = 10000;
	}
}

function DiffenceTurn() {
	//attackSave.forEach((element,index) => {
    //    ctx.fillText(element.CardNo + " " + element.aAttacker + " " + element.aTarget,500 ,100 + index * 24);
    //});
	let a = taiki();
	if(a == 1) {
		if(npcflag == true) {
			npcflag = false;
			damageSE.play();
		}
		ctx.drawImage(CardImage[attackSave[0].CardNo],300,200);
		ctx.drawImage(blockcastle[attackSave[0].aAttacker],300,130);
		ctx.drawImage(blockcastle[attackSave[0].aTarget],600,130);
		if(input.mouseIsClicked == true) {
			before = handa(input.mouseX,input.mouseY);
			if(before != 10000) {
				imagexs[before] = imagex[before]
			}
		} 
		if(input.mouseIsDown == true && before != 10000) {
			if(player.card[before] > 40 && player.card[before] < 81) {
				imagex[before] = input.mouseX;
				imagey[before] = input.mouseY;
			}
		}
		else if(input.mouseIsDown == false && input.mouseX > 450 && 
			input.mouseX < 850 && input.mouseY < 550 && input.mouseY > 130 && player.card[before] > 40 && player.card[before] < 81) {
			UseBlockCard(player.card[before],0);
			//console.log(
			//player.card[before]);
			//ctx.fillText(input.mouseY,650,600);
			imagex[before] = imagexs[before];
			imagey[before] = 560;
			player.card.splice(before,1);
			imagex.pop();
			imagey.pop();
			imagexs.pop();
			npcflag = true;
			before = 10000;
		}
		else if(input.mouseIsClicked == true && input.mouseX > 450 && 
			input.mouseX < 850 && input.mouseY < 550 && input.mouseY > 130 && before == 10000) {
			UseBlockCard(0,0);
			//console.log(player.card[before]);
			npcflag = true;
		}
		else {
			if(before != 10000)	{
				imagex[before] = imagexs[before];
				imagey[before] = 560;
				before = 10000;
			}
		}
	}
	else if(a == 3) {
		if(npcflag == true) {
			b = UseNPCBlockUse(0);
			time = performance.now();
			npcflag = false;
			damageSE.play();
		}
		ctx.drawImage(CardImage[attackSave[0].CardNo],300,200);
		ctx.drawImage(CardImage[b],600,200);
		ctx.drawImage(blockcastle[attackSave[0].aAttacker],300,130);
		ctx.drawImage(blockcastle[attackSave[0].aTarget],600,130);
		if(performance.now() - time > 1000) {
			npcflag = true;
			UseBlockCard(b,0);
		}
	}
	else if(a == 2 || npcflag == false) {
        if(npcflag == true) {
            time = performance.now();
            npcflag = false;
            healSE.play();
        }
        ctx.drawImage(CardImage[attackSave[0].CardNo],300,200);
        ctx.drawImage(blockcastle[attackSave[0].aAttacker],300,130);
		ctx.drawImage(blockcastle[attackSave[0].aTarget],600,130);
        if(performance.now() - time > 1000) {
            npcflag = true;
            useSPcard();
        }
    }
	if(attackSave.length < 1 && npcflag == true) {
		cardGameState = 3;
	}
}

function FontSet(){
	ctx.fillStyle = 'blue';
	ctx.font = "24px 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";
}

function siro(x,y) {
	if     (x > 270 && x < 385 && y >  40 && y < 150)return 0;
	else if(x > 470 && x < 580 && y >  50 && y < 160)return 1;
	else if(x > 290 && x < 400 && y > 230 && y < 340)return 2;
	else if(x > 445 && x < 555 && y > 205 && y < 315)return 3;
	else if(x > 650 && x < 760 && y > 155 && y < 265)return 4;
	else if(x > 450 && x < 560 && y > 370 && y < 480)return 5;
	else if(x > 530 && x < 640 && y > 360 && y < 470)return 6;
	return 7;
}

function GameOver() {
    ctx.drawImage(gameclear,0,0);
    ctx.drawImage(CardgameImage,500,500);
    if (box(500,500,1000,700) == true){
        window.close();
    }
}
function GameClear() {
    ctx.drawImage(gameover,0,0);
    ctx.drawImage(CardgameImage,500,500);
    if (box(500,500,1000,700) == true){
        window.close();
    }
} 


function Menu() {
	if (box(150,500,670,670) == true){
		gamestates = 1;
	}
	if (box(880,500,1380,670))
	{
		window.close();
	}
}

//引数
//cardNo 使おうとしているカード
//target 城で選択
//attacker 城で選択
function UseAttackLoad(cardNo,attacker,target){
    let nTarget = [];
    if ( 1 <= cardNo && cardNo <= 20 ) {//刀と槍
        if (castle[target].owner === castle[attacker].owner) return false;
        if (attacker === 0){
            if (!(target == 1 || target == 2 || target == 3))
            return false;
        }
        else if (attacker === 1){
            if (!(target === 0 || target === 3 || target === 4))
            return false;
        }
        else if (attacker === 2){
            if (!(target === 0 || target === 3 || target === 5))
            return false;
        }
        else if (attacker === 4){
            if (!(target === 1 || target === 3 || target === 6))
            return false;
        }
        else if (attacker === 5){
            if (!(target === 2 || target === 3 || target === 6))
            return false;
        }
        else if (attacker === 6){
            if (!(target === 3 || target === 4 || target === 5))
            return false;
        }
        attackSave.push(new AttackIns(cardNo,attacker,target));
    }
    else if (21 <= cardNo && cardNo <= 30)//薙刀
    {
        if (attacker === 0){
            nTarget.push(1,2,3)
        }
        else if (attacker === 1){
            nTarget.push(0,2,3)
        }
        else if (attacker === 2){
            nTarget.push(0,3,5)
        }
        else if (attacker === 4){
            nTarget.push(1,3,6)
        }
        else if (attacker === 5){
            nTarget.push(2,3,6)
        }
        else if (attacker === 6){
            nTarget.push(3,4,5)
        }
        else if (attacker === 3){
            nTarget.push(0,1,2,4,5,6)
        }
        nTarget.forEach((element) => {
            if (!(castle[element] === castle[attacker]))
                attackSave.push(new AttackIns(cardNo,attacker,element));
        })
    }
    else if ( 31 <= cardNo && cardNo <= 40 )//銃
    {
        if (castle[target].owner === castle[attacker].owner) return false;
        attackSave.push(new AttackIns(cardNo,attacker,target));
    }
	else if (81 <= cardNo && cardNo <= 100 && cardNo != 85)//戦術
    {
        if (castle[target].owner === castle[attacker].owner) return false;
		attackSave.push(new AttackIns(cardNo,attacker,target));
    }
    else if (( 101 <= cardNo && cardNo <= 120) || cardNo == 85 )//回復
    {
        if (castle[target].owner != castle[attacker].owner) return false;
        if (attacker === 0){
            if (!(target === 1 || target === 2 || target === 3 || target === 0))
            return false;
        }
        else if (attacker === 1){
            if (!(target === 0 || target === 3 || target === 4|| target === 1))
            return false;
        }
        else if (attacker === 2){
            if (!(target === 0 || target === 3 || target === 5|| target === 2))
            return false;
        }
        else if (attacker === 4){
            if (!(target === 1 || target === 3 || target === 6|| target === 4))
            return false;
        }
        else if (attacker === 5){
            if (!(target === 2 || target === 3 || target === 6|| target === 5))
            return false;
        }
        else if (attacker === 6){
            if (!(target === 3 || target === 4 || target === 5|| target === 6))
            return false;
        }
        else if (attacker === 3){
        }
		attackSave.push(new AttackIns(cardNo,attacker,target));
    }
    else return false;
	return true;
}
//攻撃の配列を処理 
//戻り値　攻撃カードの場合  1 //エラーの場合 -1 //回復か戦術の場合 2
//2の場合、配列を削除
function taiki(){ //true:防御を待機
	let currentCardNo = attackSave[0].CardNo;
	if (castle[attackSave[0].aAttacker].owner != attackSave[0].attackOwnerOld)
	{
		attackSave.shift();
		return -1;//使用者が変わってしまったので失敗
	}
	if (41 <= currentCardNo && currentCardNo <= 80) return -1;//防御カードを攻撃にいれるな
	if (1 <= currentCardNo && currentCardNo <= 40)
	{
		if (castle[attackSave[0].aTarget].owner === castle[attackSave[0].aAttacker].owner)
        {
            attackSave.shift();
            return -1;//自分への攻撃を削除
        }
		if (castle[attackSave[0].aTarget].owner === player1)
			return 1;//攻撃カードなので防御カードを待機
		else 
			return 3;
	}
	let targetNo = attackSave[0].aTarget;
	let userNo = attackSave[0].aAttacker;
	if (81 <= currentCardNo && currentCardNo <= 100 && currentCardNo != 85)
		{
			if (castle[attackSave[0].aTarget].owner === castle[attackSave[0].aAttacker].owner){
			attackSave.shift();
			return -1;//自分への攻撃を削除
			}
		}
	else if ((101 <= currentCardNo && currentCardNo <= 120) || currentCardNo == 85)
	{
		if (castle[attackSave[0].aTarget].owner != castle[attackSave[0].aAttacker].owner){
		attackSave.shift();
		return -1;//自分以外への回復を削除
		}
	}
	return 2;
}
//cardNo ブロック
function UseBlockCard(cardNo,attackNo){
    if (attackSave.length <= attackNo) return false;
    let targetNo = attackSave[attackNo].aTarget;
    let attackerNo = attackSave[attackNo].aAttacker;
    if (castle[targetNo].owner === castle[attackerNo].owner) return false;
    let defPoint = 0;
    let defX = 1;
    if (cardNo === 0)
    {
        defPoint = 0;
    }
    else if ( 41 > cardNo || cardNo > 80 ) return false;
    switch(cardNo){
        case 41:
            defPoint = 1;
        break;
        case 42:
            defPoint = 2;
        break;
        case 43:
            defPoint = 3;
        break;
        case 44:
            defPoint = 4;
        break;
        case 45:
            defPoint = 5;
        break;
        case 46:
            defPoint = 6;
        break;
		case 47:
			defPoint = 7;
		break;
		case 48:
			defPoint = 8;
		break;
		case 49:
			defPoint = 9;
		break;
		case 50:
			defPoint = 10;
		break;
        case 71:
            defX = 0.5;
        break;
        case 72:
            defX = 0;
        break;
    }
    let attackcardNo = attackSave[attackNo].CardNo;
    let atkPoint = 0;
    switch(attackcardNo){
        case 1:
            atkPoint = 5;
        break;
        case 2:
            atkPoint = 10;
        break;
        case 3:
            atkPoint = 30;
        break;
        case 11:
            atkPoint = 5;
        break;
        case 12:
            atkPoint = 10;
        break;
        case 21:
            atkPoint = 4;
        break;
        case 22:
            atkPoint = 8;
        break;
        case 31:
            atkPoint = 3;
        break;
        case 32:
            atkPoint = 7;
        break;
    }
	//バフとか
	if (CheckBuff(4,attackNo) == true)//防御無視
	{
		defPoint = 0;
		defX = 1;
	}
	if (CheckBuff(5,attackNo) == true)//攻撃＋1
	{
		atkPoint += 1;
	}
	if (CheckBuff(6,targetNo) == true)//受けるダメージ半減
	{
		defX *=  0.5;
	}
	if (targetNo == 3)//名古屋城パッシブ
	{
		defPoint += 1;
	}
	if (attackNo == 3)//名古屋城パッシブ
	{
		atkPoint += 1;
	}

    let damage = Math.ceil((atkPoint - defPoint) * defX);
    if (damage < 1) {
		damage = 0;
		//deffenceSE.play();
	}
	else 
	{
		//damageSE.play();
	}
    castle[attackSave[attackNo].aTarget].hp -= damage;
    if (castle[targetNo].hp < 1)
    {
        castle[targetNo].owner.giveCastle(castle[targetNo],castle[attackerNo].owner);
		castle[targetNo].hp = 25;
    }
    attackSave.splice(attackNo,1)
	return true;
}

function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}

//戦術カードの追加　　　
function DefaultDeckAdd()
{
    DeckDefault = DeckDefault.concat(DeckStrategy);
    NPCAttack = NPCAttack.concat(DeckStrategy);
}

function TurnDraw(amount = 2)//ターン開始時のドロー
{
	for(let i = 0; i < castle.length; i++){
		if (castle[i].owner == player1 && CheckBuff(1,i))
		return true;
	}
	for (let i = 0; i < amount; i++)
	{
		if (Math.random() > 0.97) {
			let result = DeckSecret[Math.floor(Math.random() * DeckSecret.length)];
			imagex.push(imagex[player.card.length - 1] + 170);
			imagexs.push(imagexs[player.card.length - 1] + 170);
			imagey.push(560);
			player.card.push(result);
		}
		else {
			let result = DeckDefault[Math.floor(Math.random() * DeckDefault.length )];
			imagex.push(imagex[player.card.length - 1] + 170);
			imagexs.push(imagexs[player.card.length - 1] + 170);
			imagey.push(560);
			player.card.push(result);
		}
	}
}


function ActionDraw(castleNumber)//ターン消費のドロー
{
	let random = Math.random();
	if (random > 0.95) {
		let result = DeckSecret[Math.floor(Math.random() * DeckSecret.length)];
		if(player.card.length == 0) {
			imagex.push(0);
			imagexs.push(0);
			imagey.push(560);
		}
		else {
			imagex.push(imagex[player.card.length - 1] + 170);
			imagexs.push(imagexs[player.card.length - 1] + 170);
			imagey.push(560);
		}
		player.card.push(result);
	}
	else if (random > 0.73 && castleNumber != 3)
	{
		let result = 0;
		switch(castleNumber)
		{
			case 0:
				result = DeckKen[Math.floor(Math.random() * DeckKen.length)];
				break;
			case 1:
				result = DeckNaginata[Math.floor(Math.random() * DeckNaginata.length)]
				break;
			case 2:
				result = DeckBougu[Math.floor(Math.random() * DeckBougu.length)]
				break;
			case 4:
				result = DeckYari[Math.floor(Math.random() * DeckYari.length)]
				break;
			case 5:
				result = DeckFood[Math.floor(Math.random() * DeckFood.length)]
				break;
			case 6:
				result = DeckHinawa[Math.floor(Math.random() * DeckHinawa.length)]
		}
	}
	else 
	{
		let result = DeckDefault[Math.floor(Math.random() * DeckDefault.length )];
		if(player.card.length == 0) {
			imagex.push(0);
			imagexs.push(0);
			imagey.push(560);
		}
		else {
			imagex.push(imagex[player.card.length - 1] + 170);
			imagexs.push(imagexs[player.card.length - 1] + 170);
			imagey.push(560);
		}
		player.card.push(result);
	}
}

function NPCAttackUse(UsingCastleNumber){//falseが返ってきたらドローさせる
	let usingCard = NPCAttack[Math.floor(Math.random() * NPCAttack.length)]
	if (Math.random() > 0.97)
		usingCard = NPCAttackSecret[Math.floor(Math.random() * NPCAttackSecret.length)]
	//useCard = 2;
	if ( 1 <= usingCard && usingCard <= 20 ) {
		targetList = [];
		if (UsingCastleNumber === 0){
            targetList.push(1,2,3)
        }
        else if (UsingCastleNumber === 1){
            targetList.push(0,4,3)
        }
        else if (UsingCastleNumber === 2){
            targetList.push(0,5,3)
        }
		else if (UsingCastleNumber === 3){
			targetList.push(0,1,2,4,5,6)
		}
        else if (UsingCastleNumber === 4){
            targetList.push(1,6,3)
        }
        else if (UsingCastleNumber === 5){
            targetList.push(2,6,3)
        }
        else if (UsingCastleNumber === 6){
            targetList.push(5,4,3)
        }
		trueTarget = [];
		targetList.forEach((element) => {
            if (!(castle[element].owner === castle[UsingCastleNumber].owner))
				trueTarget.push(element);
        })
		if (trueTarget.length > 0) {
			if (UseAttackLoad(usingCard,UsingCastleNumber,trueTarget[Math.floor(Math.random() * trueTarget.length)]) == false)
				return false;
		}
		else 
			return false;
	}
	else if (21 <= usingCard && usingCard <= 30)
	{
		if (UseAttackLoad(usingCard,UsingCastleNumber) == false)
		return false;
	}
	else if ((31 <= usingCard && usingCard <= 40) || (81 <= usingCard && usingCard <= 100 && usingCard != 85))
	{
		targetList = [0,1,2,3,4,5,6];
		trueTarget = [];
		targetList.forEach((element) => {
            if (!(castle[element].owner === castle[UsingCastleNumber].owner))
				trueTarget.push(element);
        })
		if (trueTarget.length > 0) {
			if (UseAttackLoad(usingCard,UsingCastleNumber,trueTarget[Math.floor(Math.random() * trueTarget.length)]) == false)
				return false;
		}
		else 
			return false;
	}
	else if ((101 <= usingCard && usingCard <= 120) || usingCard == 85)
	{
		targetList = [];
		if (UsingCastleNumber === 0){
            targetList.push(0,1,2,3)
        }
        else if (UsingCastleNumber === 1){
            targetList.push(0,1,4,3)
        }
        else if (UsingCastleNumber === 2){
            targetList.push(0,2,5,3)
        }
		else if (UsingCastleNumber === 3){
			targetList.push(0,1,2,3,4,5,6)
		}
        else if (UsingCastleNumber === 4){
            targetList.push(1,4,6,3)
        }
        else if (UsingCastleNumber === 5){
            targetList.push(2,5,6,3)
        }
        else if (UsingCastleNumber === 6){
            targetList.push(5,4,3,6)
        }
		trueTarget = [];
		targetList.forEach((element) => {
            if ((castle[element].owner === castle[UsingCastleNumber].owner))
				trueTarget.push(element);
        })
		if (trueTarget.length > 0) 
			if (UseAttackLoad(usingCard,UsingCastleNumber,trueTarget[Math.floor(Math.random() * trueTarget.length)]) == false)
				return false;
		else 
			return false;
	}
}


//バフ全ての更新
function BuffUpdata()
{
    for(let i = buffSave.length -1; 0 <= i; i--){
        buffSave[i].updata();
        if (buffSave[i].remainTurn < 1)
        buffSave.splice(i,1);
    }
}

//バフを与えるときの関数
function addBuff(turnNew, IDn,BuffTargetNo,BuffAttackerNo){
	for (let j = 0; j < buffSave.length; j++){
		if (buffSave[j].BuffTarget == BuffTargetNo && buffSave[j].buffID == IDn)
		{
			buffSave[j].remainTurn = turnNew;
			return 1;
		}
	}
	buffSave.push(new StateBuff(turnNew,IDn,BuffTargetNo,BuffAttackerNo))
	return 0;
}

//城がバフを持っているかチェック //true or false
function CheckBuff(BuffID,checkCastle){
	for (let j = 0; j < buffSave.length; j++){
		if (buffSave[j].BuffTarget == checkCastle && buffSave[j].buffID == BuffID)
		{
			return true;
		}
	}
	return false;
}

function UseNPCBlockUse(attackNumber){
	let usingCard = NPCBlock[Math.floor(Math.random() * NPCBlock.length)]
	//UseBlockCard(usingCard,attackNumber);
	return usingCard;
}


function Draw() {
	TurnDraw(2);
	cardGameState = 1;
	BuffUpdata();
}

function box(x,y,xb,yb) {
	if(input.mouseIsClicked == true&& input.mouseX > x && 
		input.mouseX < xb && input.mouseY < yb && input.mouseY > y) {
		return true;
	}
		return false;
}

function handa(scx,scy) {
	if(imagex.length * 175 > scx) {
		if(imagex[Math.floor((scx - scroolmovex)/175)] < scx && imagex[Math.floor((scx - scroolmovex)/175)] + 150 > scx && scy  < 700 && scy > 500) {
			return Math.floor((scx - scroolmovex)/175);
		}
	}
	return 10000;
}

function drawNumber(number,posX,posY){
	if (number == 0)
		ctx.drawImage(ImageNumber[number],posX,posY);
	else if (1 <= number && number <= 9)
	{
		ctx.drawImage(ImageNumber[number],posX,posY);
	}
	else if (10 <= number && number <= 99)
	{
		let num1 = Math.floor(number / 10);
		let num2 = number - (num1 * 10);
		ctx.drawImage(ImageNumber[num1],posX,posY);
		ctx.drawImage(ImageNumber[num2],posX + 35,posY);
	}
	else if (100 <= number && number <= 999)
	{
		let num1 = Math.floor(number / 100);
		let num2 = Math.floor((number - (num1 * 100)) / 10);
		let num3 = number - (num1 * 100) - (num2 * 10) 
		ctx.drawImage(ImageNumber[num1],posX,posY);
		ctx.drawImage(ImageNumber[num2],posX + 35,posY);
		ctx.drawImage(ImageNumber[num3],posX + 70,posY);
	}
}
function drawBuff(no){
	let xpos = 1395;
	let xve = 30;
	let ypos = 28;
	let yvec = 70;
	ypos += yvec * no;

	if (CheckBuff(1,no))
	{
		ctx.drawImage(hunger,xpos,ypos);
		xpos += xve;
	}
	if (CheckBuff(2,no))
	{
		ctx.drawImage(fire,xpos,ypos);
		xpos += xve;
	}
	if (CheckBuff(3,no))
	{
		ctx.drawImage(water,xpos,ypos);
		xpos += xve;
	}
	if (CheckBuff(4,no))
	{
		ctx.drawImage(uma,xpos,ypos);
		xpos += xve;
	}
	if (CheckBuff(5,no))
	{
		ctx.drawImage(konpei,xpos,ypos);
		xpos += xve;
	}
	if (CheckBuff(6,no))
	{
		ctx.drawImage(sandan,xpos,ypos);
		xpos += xve;
	}
	
}

function useSPcard()
{
	let currentCardNo = attackSave[0].CardNo;
	let targetNo = attackSave[0].aTarget;
	let userNo = attackSave[0].aAttacker;
	switch(currentCardNo){
		case 81:
			addBuff(2,1,targetNo,userNo)
			break;
		case 82:
			addBuff(3,2,targetNo,userNo)
			break;
		case 83:
			addBuff(5,3,targetNo,userNo)
			break;
		case 84:
			castle[userNo].hp += 10;
			castle[targetNo].hp -= 10;
			if (castle[targetNo].hp < 1)
			{
				castle[targetNo].owner.giveCastle(castle[targetNo],castle[userNo].owner);
				castle[targetNo].hp = 25;
			}

			break;
		case 85:
			addBuff(2,4,targetNo,targetNo);
			break;
		case 86:
			if (castle[userNo].owner == player1)
			{
				let search = true;
				for (let i = 0; i < player.card.length; i++){
					if (player.card[i] == 32)
					{
						UseAttackLoad(32,userNo,targetNo)
						UseAttackLoad(32,userNo,targetNo)
						UseAttackLoad(32,userNo,targetNo)
						player.card.splice(i,1);
						search = false;
						break;
					}
				  }
				if (search == true){
				for (let i = 0; i < player.card.length; i++){
					if (player.card[i] == 31)
					{
						UseAttackLoad(31,userNo,targetNo)
						UseAttackLoad(31,userNo,targetNo)
						UseAttackLoad(31,userNo,targetNo)
						player.card.splice(i,1);
						search = false;
					}
				  }
				}
				if (search == true)
					addBuff(1,6,userNo,userNo)
			}
			else
			{
				if (Math.random() > 0.6){
					UseAttackLoad(31,userNo,targetNo)
					UseAttackLoad(31,userNo,targetNo)
					UseAttackLoad(31,userNo,targetNo)
				}
				else if (Math.random() > 0.5) {
					UseAttackLoad(32,userNo,targetNo)
					UseAttackLoad(32,userNo,targetNo)
					UseAttackLoad(32,userNo,targetNo)
				}
				else{
					addBuff(1,6,userNo,userNo)
				}
			}
			break;
		case 101:
			castle[targetNo].hp += 3;
			break;
		case 102:
			castle[targetNo].hp += 5;
			break;
		case 103:
			castle[targetNo].hp += 5;
			addBuff(2,5,targetNo,targetNo);
			break;
		case 104:
			castle[targetNo].hp += 10;
			break;
		case 105:
			if (Math.random() > 0.5)
				castle[targetNo].hp += 50;
			else
				castle[targetNo].hp = 1;
			break;
	}
	attackSave.shift();
}

function GameInitialize(){
	tern = 7;
	time = 0;
	nowtime = 0;
	scroolmovex = 0;
	var y;
	buffSave.splice(0);
	imagexs.splice(0);
	imagex.splice(0);
	imagey.splice(0);
	let result =  DeckDefault[Math.floor(Math.random() * DeckDefault.length )];;
	imagexs.push(0)
	imagex.push(0)
	imagey.push(560)
	player.card.push(result);
	TurnDraw(4);
	castle[0] = new Castle(40,'城1',player1);
	castle[1] = new Castle(40,'城2',npc[0]);
	castle[2] = new Castle(40,'城3',npc[1]);
	castle[3] = new Castle(40,'城4',npc[2]);
	castle[4] = new Castle(40,'城5',npc[3]);
	castle[5] = new Castle(40,'城6',npc[4]);
	castle[6] = new Castle(40,'城7',npc[5]);
	player1.setCastle(castle[0]);
	npc[0].setCastle(castle[1]);
	npc[1].setCastle(castle[2]);
	npc[2].setCastle(castle[3]);
	npc[3].setCastle(castle[4]);
	npc[4].setCastle(castle[5]);
	npc[5].setCastle(castle[6]);
	image.addEventListener("load",function() {
		ctx.drawImage(image,0,0);
	})
	canvas.width = width;		
	canvas.height = height;	
	var ctx = canvas.getContext( '2d' );
	var cpu;

	gamestates = 1;
}