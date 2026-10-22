# สรุปเตรียมสอบ — แก้โค้ดทรงเรขาคณิต

**เริ่มต้น:** เปิด `START-HERE.html` เพื่อเลือกหน้าเว็บ 10 รูปทรง หรือเปิดไฟล์ HTML ในโฟลเดอร์นั้น ๆ เช่น `02-cone/cone.html` ใน Chrome

## สิ่งที่โจทย์ต้นฉบับกำหนด

- 4 บล็อก: ส่วนหัว `<h1>` และ 2 ย่อหน้า; รูปพร้อมแหล่งที่มา; หัวข้อ `<h2>` พร้อมภาพ 150px; แบบฟอร์มกับพื้นที่แสดงผล
- จอกว้างตั้งแต่ 576px: บล็อกแรกอยู่แถวบน และบล็อก 2,3,4 อยู่ข้างกัน; จอเล็กเรียง 1→2→3→4
- Main branch: แยก HTML/CSS/JS และใช้ `addEventListener('submit', ...)` กับปุ่ม `type="submit"`
- ภาพต้องเรียกแบบ relative path เช่น `asset/geometry.svg` หรือ `asset/tank.jpg`

## สูตรและบรรทัด JavaScript ที่ต้องจำ

| รูปทรง | ตัวแปรจากฟอร์ม | สูตรปริมาตร (หน่วย cm³) |
|---|---|---|
| Cylinder (ทรงกระบอก) | Radius, Height | `Math.PI * Math.pow(radius, 2) * height / unit` |
| Cone (ทรงกรวย) | Radius, Height | `Math.PI * Math.pow(radius, 2) * height / (3 * unit)` |
| Sphere (ทรงกลม) | Radius | `(4 / 3) * Math.PI * Math.pow(radius, 3) / unit` |
| Cube (ลูกบาศก์) | Side | `Math.pow(side, 3) / unit` |
| Rectangular Prism (ทรงสี่เหลี่ยมมุมฉาก) | Length, Width, Height | `length * width * height / unit` |
| Square Pyramid (พีระมิดฐานสี่เหลี่ยมจัตุรัส) | Base side, Height | `Math.pow(side, 2) * height / (3 * unit)` |
| Triangular Prism (ปริซึมฐานสามเหลี่ยม) | Triangle base, Triangle height, Prism length | `(base * triangleHeight * length) / (2 * unit)` |
| Hemisphere (ครึ่งทรงกลม) | Radius | `(2 / 3) * Math.PI * Math.pow(radius, 3) / unit` |
| Rectangular Pyramid (พีระมิดฐานสี่เหลี่ยมผืนผ้า) | Base length, Base width, Height | `length * width * height / (3 * unit)` |
| Triangular Pyramid (พีระมิดฐานสามเหลี่ยม) | Triangle base, Triangle height, Pyramid height | `(base * triangleHeight * height) / (6 * unit)` |

**สำคัญเรื่องหน่วย:** โค้ดใช้ `const unit = parseFloat(document.getElementById("inUnit").value);` โดย `cm` มี value `1` และ `mm` มี value `1000` เพราะ `1 cm³ = 1000 mm³` ดังนั้นทุกสูตรจะหาร `unit` หลังคำนวณจากความยาวที่เลือก **ห้ามหารด้วย 10 เพียงครั้งเดียวหลังได้ปริมาตร**

## เปลี่ยนข้อสอบจากทรงกระบอกเป็นอย่างอื่นทำอย่างไร

1. เปิดโฟลเดอร์รูปทรงใกล้เคียง แล้วคัดลอกเป็นโฟลเดอร์ใหม่
2. เปิด `<shape>.html` แก้ `<title>`, `<h1>`, `<p>`, `<img src="asset/...">` ให้ตรงโจทย์
3. ในฟอร์มแก้ `<label>` และ `<input id="...">` ตามตัวแปรที่สูตรต้องใช้ เช่น Sphere มีแค่ Radius; Rectangular Prism มี Length/Width/Height
4. เปิด `script.js` ปรับ `const ... = parseFloat(document.getElementById('...').value)` ให้ชื่อ id ตรงกับ HTML
5. **บรรทัดสำคัญ:** แก้ `const volume = ...;` เป็นสูตรใหม่และอัปเดต `values = [...]` ให้ตรงกับช่องกรอก
6. เปิด `styles.css` ตรวจ `@media screen and (min-width: 576px)` ต้องมี ส่วนมากไม่ต้องแก้หากการจัดวางไม่เปลี่ยน
7. ทดสอบกรอก cm และ mm, กดปุ่ม Calculate แล้วดูว่าแสดง cm³ และไม่รีเฟรชหน้า

## ตัวอย่าง submit ที่ใช้สอบ

```html
<form id="volumeCalculator">
  <input id="inRadius" type="number" step="any" required>
  <button type="submit">Calculate</button>
</form>
```

```javascript
document.getElementById('volumeCalculator').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateVolume();
});
```

**อย่าสับสน:** `h` ของปริซึมสามเหลี่ยมคือความสูงของรูปสามเหลี่ยม แต่ความยาวปริซึมเป็นอีกตัวแปร; สำหรับพีระมิดสามเหลี่ยมมีความสูงของฐานสามเหลี่ยมและความสูงพีระมิดแยกกัน

## แบบฝึกและเฉลย

- **Cylinder:** Radius=5 cm, Height=10 cm → 5 × 5 × 10 × π = 785.40 cm³
- **Cone:** Radius=5 cm, Height=10 cm → π × 5² × 10 ÷ 3 = 261.80 cm³
- **Sphere:** Radius=5 cm → (4 ÷ 3) × π × 5³ = 523.60 cm³
- **Cube:** Side=5 cm → 5³ = 125.00 cm³
- **Rectangular Prism:** Length=5 cm, Width=4 cm, Height=10 cm → 5 × 4 × 10 = 200.00 cm³
- **Square Pyramid:** Base side=6 cm, Height=10 cm → 6² × 10 ÷ 3 = 120.00 cm³
- **Triangular Prism:** Triangle base=6 cm, Triangle height=4 cm, Prism length=10 cm → 6 × 4 ÷ 2 × 10 = 120.00 cm³
- **Hemisphere:** Radius=5 cm → (2 ÷ 3) × π × 5³ = 261.80 cm³
- **Rectangular Pyramid:** Base length=6 cm, Base width=4 cm, Height=10 cm → 6 × 4 × 10 ÷ 3 = 80.00 cm³
- **Triangular Pyramid:** Triangle base=6 cm, Triangle height=4 cm, Pyramid height=10 cm → 6 × 4 × 10 ÷ 6 = 40.00 cm³

> หมายเหตุ: เอกสารโจทย์ที่ส่งให้มีตัวอย่าง Cylinder เป็นหลัก ส่วนอีก 9 รูปทรงเป็นชุดฝึกเพิ่มเติมที่สร้างขึ้นเพื่อช่วยเตรียมสอบ ไม่ใช่ข้อสอบจริงของอาจารย์
