const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Plugins.Tilemap,
		C3.Behaviors.Sin,
		C3.Behaviors.Rotate,
		C3.Behaviors.Follow,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.X,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.Sprite.Acts.ZMoveToObject
	];
};
self.C3_JsPropNameTable = [
	{ТайловыйФон: 0},
	{Текст: 0},
	{Кнопка: 0},
	{правила: 0},
	{ТайловыйФон2: 0},
	{Твёрдый: 0},
	{Спрайт: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{герой: 0},
	{"8Направлений": 0},
	{приведениепр: 0},
	{Мышь: 0},
	{Пуля: 0},
	{Спрайт2: 0},
	{КартаТайлов: 0},
	{ТайловыйФон3: 0},
	{Текст2: 0},
	{Синусоида: 0},
	{Поворот: 0},
	{приведение2: 0},
	{ТайловыйФон4: 0},
	{Текст3: 0},
	{меню: 0},
	{телепорт: 0},
	{приведение3: 0},
	{магия: 0},
	{телепорт2: 0},
	{ТайловыйФон5: 0},
	{СледоватьЗа: 0},
	{босс: 0},
	{ТайловыйФон6: 0},
	{Текст4: 0},
	{Текст5: 0},
	{Кнопка2: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Текст: class extends self.ITextInstance {},
	Кнопка: class extends self.IButtonInstance {},
	правила: class extends self.IButtonInstance {},
	ТайловыйФон2: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	герой: class extends self.ISpriteInstance {},
	приведениепр: class extends self.ISpriteInstance {},
	Мышь: class extends self.IInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	КартаТайлов: class extends self.ITilemapInstance {},
	ТайловыйФон3: class extends self.ITiledBackgroundInstance {},
	Текст2: class extends self.ITextInstance {},
	приведение2: class extends self.ISpriteInstance {},
	ТайловыйФон4: class extends self.ITiledBackgroundInstance {},
	Текст3: class extends self.ITextInstance {},
	меню: class extends self.IButtonInstance {},
	телепорт: class extends self.ISpriteInstance {},
	приведение3: class extends self.ISpriteInstance {},
	магия: class extends self.ISpriteInstance {},
	телепорт2: class extends self.ISpriteInstance {},
	ТайловыйФон5: class extends self.ITiledBackgroundInstance {},
	босс: class extends self.ISpriteInstance {},
	ТайловыйФон6: class extends self.ITiledBackgroundInstance {},
	Текст4: class extends self.ITextInstance {},
	Текст5: class extends self.ITextInstance {},
	Кнопка2: class extends self.IButtonInstance {}
}