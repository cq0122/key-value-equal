# key-value-equal

> create an object with the same key value

### Define an object with the same key value, you need to use Ctrl+C many times.

```
export default {
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

export default kve("USER", "MENU", "PROVINCES", "CITYS", ...);
```

###  Making the code easier to read, kve also supports grouping, the multidimensional array will be flattened.

```
import { kve } from "key-value-equal";

export default kve(["USER", "MENU"], ["PROVINCES", "CITYS"], ...);
```

###  There are also little surprises.
- kfn.upper 
- kfn.lower
- kfn.hump
- kfn.line

```
import { kve, kfn } from "key-value-equal";

export default kve("user", "menu", "provinces", "citys", ... , kfn.upper);
//export default kve("USER", "MENU", "PROVINCES", "CITYS", ...);
```

```
import { kve, kfn } from "key-value-equal";

export default kve("USER", "MENU", "PROVINCES", "CITYS", ... , kfn.lower);
//export default kve("user", "menu", "provinces", "citys", ...);
```

```
import { kve, kfn } from "key-value-equal";

export default kve("user_setting", "menu_conf", "province_list", "city_list", ... , kfn.hump);
//export default kve("userSetting", "menuConf", "provinceList", "cityList", ...);
```

```
import { kve, kfn } from "key-value-equal";

export default kve("userSetting", "menuConf", "provinceList", "cityList", ... , kfn.line);
//export default kve("user_setting", "menu_conf", "province_list", "city_list", ...);
```
. . .

> hope you will like !

