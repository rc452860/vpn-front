/**
 *  姓名生成颜色
 * @param {*} name username
 */
export function nameToColor(name = 'a'){
  /**
   * 生成HSL颜色并转换成RGB颜色返回
   * HSL分别代表 色相(H) 饱和度(S) 亮度(L)
   * 其取值范围:
   * H:0-360
   * S:0-1
   * L:0-1
   * 根据比例生成26位色板并根据用户名的首字母来确定颜色
   */
  const code = name.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
  const h = 360 / 26 * code;
  const s = 100 / 26 * code;
  const l = 100 / 26 * code;
  const color =  HSVtoRGB(h,parseFloat(s)/100.0,parseFloat(l)/100.0);
  console.log(name,color)  
  return color;
}


/* accepts parameters
 * h  Object = {h:x, s:y, v:z}
 * OR
 * h, s, v
*/
export function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }
  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
}
