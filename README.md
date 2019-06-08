# key-value-equal

> Declare an object with the same key value.

### Declare an object with the same key value, you need to use Ctrl+C many times.

```
const config = {
    USER: "USER",
    MENU: "MENU",

    PROVINCES: "PROVINCES",
    CITYS: "CITYS",
    
    ...
};
```

### Installation kve.
```
$npm install key-value-equal --save
```

### Use kve, no Ctrl+C necessary.

```
import { kve } from "key-value-equal";

const config = kve("USER", "MENU", "PROVINCES", "CITYS", ...);
//=> {USER:"USER", MENU:"MENU", PROVINCES:"PROVINCES", CITYS:"CITYS", ...}
```

###  Making the code easier to read, kve also supports grouping, the multidimensional array will be flattened.

```
import { kve } from "key-value-equal";

const config = kve(["USER", "MENU"], ["PROVINCES", "CITYS"], ...);
//=> {USER:"USER", MENU:"MENU", PROVINCES:"PROVINCES", CITYS:"CITYS", ...}
```

###  There are also little surprises.
- kfn.upper 

```
import { kve, kfn } from "key-value-equal";

const config = kve("user", "menu", "provinces", "citys", ... , kfn.upper);
//const config = kve("USER", "MENU", "PROVINCES", "CITYS", ...);
//=> {USER:"USER", MENU:"MENU", PROVINCES:"PROVINCES", CITYS:"CITYS", ...}
```

- kfn.lower

```
import { kve, kfn } from "key-value-equal";

const config = kve("USER", "MENU", "PROVINCES", "CITYS", ... , kfn.lower);
//const config = kve("user", "menu", "provinces", "citys", ...);
//=> {user:"user", menu:"menu", provinces:"provinces", citys:"citys", ...}
```

- kfn.hump

```
import { kve, kfn } from "key-value-equal";

const config = kve("user_setting", "menu_conf", "province_list", "city_list", ... , kfn.hump);
//const config = kve("userSetting", "menuConf", "provinceList", "cityList", ...);
//=> {userSetting:"userSetting", menuConf:"menuConf", provinceList:"provinceList", cityList:"cityList", ...}
```


- kfn.line

```
import { kve, kfn } from "key-value-equal";

const config = kve("userSetting", "menuConf", "provinceList", "cityList", ... , kfn.line);
//const config = kve("user_setting", "menu_conf", "province_list", "city_list", ...);
//=> {user_setting:"user_setting", menu_conf:"menu_conf", province_list:"province_list", city_list:"city_list", ...}
```


> Hope you will like !

