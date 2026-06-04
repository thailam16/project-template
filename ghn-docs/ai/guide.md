# GHN Design System — Hướng dẫn đầy đủ cho AI

> Trích xuất từ tài liệu GHN (ghn-docs). Mỗi component/nền tảng: khi nào dùng / KHÔNG dùng, nên/không nên,
> design tokens (`var(--ghn-*)`), khả năng tiếp cận. **Component import từ `antd`** (Ant Design v6); brand GHN
> áp qua `<ConfigProvider theme={ghnTheme}>`. Quy tắc bắt buộc: xem `AGENTS.md` (gốc dự án). Bảng props đầy đủ
> từng component: `ai/llms-full.txt`. Catalog máy đọc: `ai/components.json`.


# Tổng quan

## Giới thiệu — Ổn định

Ngôn ngữ thiết kế dùng chung để xây sản phẩm GHN nhất quán, dễ tiếp cận.

Đây là trang NỀN TẢNG (foundation) giới thiệu tổng quan GHN Design System — bộ token, nguyên tắc và cấu trúc làm gốc cho toàn bộ sản phẩm số GHN.

### Token cốt lõi

| Token | Giá trị |
|---|---|
| primary | `#ff5200` |
| primary-hover | `#ff7429` |
| primary-active | `#d4490b` |
| primary-soft | `#fff2e6` |
| secondary / info / link | `#006fad` |
| text | `#09090b` |
| text-muted | `#52525b` |
| border | `#d4d4d8` |
| bg-subtle | `#fafafa` |
| success | `#52c41a` |
| warning | `#faad14` |
| error | `#ff4d4f` |
| radius mặc định | `8px` |
| spacing-grid | `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64` px |
| font | `Inter · letter-spacing 0.1px` |

### Nguyên tắc thiết kế

1. **Nhất quán.** Cùng một vấn đề luôn giải bằng cùng một mẫu — nút chính phải cùng màu, bo góc, khoảng cách ở mọi màn.
2. **Rõ ràng.** Mỗi màn hình có một mục tiêu chính rõ rệt; nhãn dùng động từ cụ thể, phân cấp thị giác dẫn mắt tới hành động quan trọng nhất.
3. **Tiết chế màu.** Cam `#ff5200` chỉ dành cho hành động chính và điểm nhấn. Phần lớn giao diện dùng trung tính (chữ, viền, nền) để cam nổi bật khi cần.
4. **Tiết chế đường nét.** Tách lớp bằng MỘT tín hiệu — nền khác tông, một đường viền, hoặc đổ bóng — không dùng cả viền lẫn nền cùng lúc. Khối đã có nền xám/tint thì bỏ viền bao quanh.
5. **Dễ tiếp cận.** Tương phản đủ chuẩn, vùng chạm đủ lớn, mọi thao tác dùng được bằng bàn phím (`Tab` di chuyển, `Enter`/`Space` kích hoạt, `Esc` đóng lớp phủ).

### Cấu trúc hệ thống (3 lớp)

1. **Nền tảng** — design token (màu, khoảng cách, bo góc), kiểu chữ Inter và lưới 4px. Mọi thứ phía trên đều kế thừa từ đây.
2. **Components** — các khối UI tái dùng (Button, Field, Tag, Alert, Menu…) dựng hoàn toàn từ token nền tảng.
3. **Tài nguyên** — hướng dẫn áp dụng, thư viện Figma, bộ icon FontAwesome 6 Pro.

### Khả năng tiếp cận

- Chữ chính `#09090b` trên nền trắng và chữ trắng trên nền cam `#ff5200` đều đạt ngưỡng tương phản đọc tốt.
- Không dùng chữ xám nhạt cho nội dung quan trọng.
- Vùng chạm đủ rộng; khoảng cách theo lưới 4px.

### Nên / Không nên

**Nên:**
- Lấy giá trị màu, khoảng cách, bo góc trực tiếp từ bảng token.
- Tái dùng component có sẵn; chỉ tùy biến trong phạm vi biến thể, kích thước, trạng thái đã định nghĩa.
- Dùng khi dựng màn hình cho sản phẩm GHN (web nội bộ, cổng đối tác, ứng dụng vận hành).
- Đề xuất bổ sung token/mẫu còn thiếu vào hệ thống thay vì vá cục bộ.

**Không nên:**
- Gõ tay mã màu hay khoảng cách tự nhớ — sai một chút tạo lệch lạc tích lũy.
- Tự tạo component trùng chức năng với component đã có hoặc chèn bo góc/font ngoài chuẩn.
- Dùng cam `#ff5200` để tô nền lớn hoặc nhiều nút cùng lúc — màu nhấn dùng tràn lan sẽ mất sức nhấn.
- Dùng cho sản phẩm ngoài thương hiệu GHN hoặc trang marketing cần ngôn ngữ thị giác tự do.
- Tự chế màu, bo góc hay khoảng cách nằm ngoài bộ token đã khóa.


# Hướng dẫn

## Khả năng tiếp cận — Ổn định

Cam kết WCAG 2.1 AA và cách áp dụng trong GHN DS: mọi thành phần được thiết kế đáp ứng bốn nguyên lý cốt lõi — dễ nhận biết, dễ thao tác, dễ hiểu, bền vững với công nghệ hỗ trợ.

### Nguyên tắc bắt buộc

| Nguyên tắc | Giá trị / Yêu cầu cụ thể |
|---|---|
| HTML ngữ nghĩa | Dùng đúng thẻ: `<button>` cho nút bấm, `<a>` cho liên kết, `<label>` cho nhãn — không dùng `<div>` gắn sự kiện |
| Focus hiển thị | `:focus-visible` với viền dày **2px**, cách **2px** (token: `--ghn-focus-width: 2px`, `--ghn-focus-offset: 2px`) |
| Tương phản đủ | Văn bản thường tối thiểu **4.5:1**; văn bản lớn (≥ 18.66px đậm hoặc ≥ 24px) tối thiểu **3:1** |
| Điều hướng bàn phím | Toàn bộ chức năng thao tác được bằng bàn phím, thứ tự Tab hợp lý |
| ARIA đúng cách | Chỉ dùng ARIA khi HTML gốc không đủ; ưu tiên không ARIA hơn ARIA sai |

### Tỷ lệ tương phản màu sắc

| Cặp màu | Token | Tỷ lệ | Kết quả |
|---|---|---|---|
| Cam trên trắng | `--ghn-primary` (#ff5200) | ~3.4:1 | Hạn chế — chỉ chữ lớn/đậm, icon, đồ họa |
| Trắng trên cam | `--ghn-primary` (#ff5200) | ~3.4:1 | Hạn chế — đạt AA cho chữ lớn trên nút |
| Văn bản chính trên trắng | `--ghn-neutral-950` | ~19:1 | AAA — dùng cho mọi cỡ chữ |
| Văn bản phụ trên trắng | `--ghn-neutral-700` | ~9.7:1 | AAA — văn bản phụ, mô tả, chú thích |
| Văn bản mờ trên trắng | `--ghn-neutral-600` | ~7.4:1 | AAA — placeholder, nhãn phụ trợ |
| Xanh thông tin trên trắng | `--ghn-secondary` | ~4.9:1 | AA — liên kết, văn bản thông tin |

Lưu ý: màu cam `#ff5200` chỉ đạt ~3.4:1 — **không dùng cho đoạn văn bản nhỏ trên nền trắng**.

### Bàn phím — phím chuẩn

| Phím | Hành vi |
|---|---|
| `Tab` | Di chuyển tới phần tử tương tác kế tiếp |
| `Shift + Tab` | Quay lại phần tử trước |
| `Enter` | Kích hoạt nút, liên kết, gửi biểu mẫu |
| `Space` | Bật/tắt checkbox, switch, kích hoạt nút |
| `Esc` | Đóng hộp thoại, dropdown, popover; hủy thao tác |
| `↑ ↓ ← →` | Di chuyển trong nhóm: menu, tab, radio, lịch, danh sách |

Khi mở hộp thoại: focus phải chuyển vào trong và bị giữ lại (focus trap). Khi đóng: focus trả về phần tử đã kích hoạt.

### Nên / Không nên

**Nên:**
- Dùng thẻ `<button>`, `<a>`, `<label>` đúng vai trò
- Gắn nhãn cho mọi trường nhập liệu, kể cả khi đã có placeholder
- Cung cấp văn bản thay thế cho icon mang ý nghĩa hành động
- Giữ tỷ lệ tương phản văn bản tối thiểu 4.5:1
- Đảm bảo focus hiển thị rõ với viền 2px
- Hỗ trợ `Esc` để đóng mọi lớp phủ

**Không nên:**
- Gắn sự kiện click lên `<div>` hay `<span>` thay nút
- Tắt viền focus bằng `outline: none` mà không thay thế
- Dùng riêng màu sắc để truyền tải trạng thái thành công hay lỗi
- Đặt chữ nhỏ màu cam `#ff5200` trên nền trắng
- Dùng ARIA để vá lỗi cho HTML sai vai trò
- Bẫy focus mà không có lối thoát bằng bàn phím

### Quy trình kiểm thử (3 bước bắt buộc trước phát hành)

1. **Trình đọc màn hình** — duyệt toàn bộ luồng bằng VoiceOver, NVDA hoặc TalkBack; tiêu chí: mọi phần tử được đọc đúng tên, vai trò, trạng thái
2. **Chỉ dùng bàn phím** — rút chuột, thao tác bằng Tab; tiêu chí: không có phần tử nào bị bỏ qua hay kẹt focus
3. **Kiểm tra tương phản** — đo tỷ lệ mọi cặp văn bản và nền (gồm hover, disabled, dark mode); tiêu chí: văn bản đạt tối thiểu 4.5:1, văn bản lớn đạt 3:1

Dark mode: văn bản chính dùng `#fafafa` trên nền `#141414` vẫn cần đạt ngưỡng tương phản tương đương.

## Bắt đầu — Ổn định

Điểm khởi đầu chung của GHN Design System dành cho Designer, Developer và Product Manager — trình bày mục tiêu, quy trình token và năm nguyên tắc bắt buộc cho mọi sản phẩm GHN.

### Tổng quan

GHN Design System là ngôn ngữ thiết kế dùng chung cho toàn bộ web và ứng dụng nội bộ của Giao Hàng Nhanh. Mọi màu sắc, khoảng cách, bo góc, chuyển động đều được mô tả bằng token CSS `--ghn-*` để đảm bảo hiển thị nhất quán ở mọi nơi.

### Đối tượng & cách đọc

- **Designer**: Bắt đầu từ Nền tảng (màu sắc, typography, khoảng cách, bo góc), rồi đến Component. Dùng đúng style và biến Figma để bàn giao khớp với token.
- **Developer**: Tham chiếu danh sách token và đặc tả component. Luôn dùng biến `--ghn-*` thay vì giá trị cứng để hỗ trợ chủ đề và dark mode.
- **Product Manager**: Đọc nguyên tắc và trạng thái component để hiểu hành vi, giới hạn và lý do thiết kế.

### Quy trình token

Một nguồn chân lý duy nhất: **Figma (Variables & styles)** → **Token DTCG (nguồn chuẩn hóa)** → **Theme (biến `--ghn-*`)** → **Sản phẩm (Web & app GHN)**.

Khi giá trị thay đổi ở đầu chuỗi (ví dụ sắc cam chủ đạo), thay đổi đó lan tới mọi sản phẩm mà không cần sửa từng nơi.

### Nguyên tắc bắt buộc

Đây là ràng buộc bắt buộc, không phải gợi ý. Vi phạm sẽ phá vỡ tính nhất quán và khả năng bảo trì của hệ thống.

| Nguyên tắc | Chi tiết |
|---|---|
| **Chỉ dùng Inter** | Inter là font duy nhất cho toàn bộ giao diện. Không thay thế bằng font khác cho tiêu đề hay nội dung. |
| **Bo góc 8** | Bán kính mặc định là `--ghn-r-default` (8px). Tag dùng 6px, dạng viên thuốc dùng 999px. Không tự đặt giá trị khác. |
| **Dùng token, không hardcode** | Mọi màu, khoảng cách, bo góc, chuyển động phải tham chiếu biến `--ghn-*`. Tránh mã màu hoặc số px cố định. |
| **Icon FontAwesome 6 Pro** | Chỉ sử dụng bộ icon FontAwesome 6 Pro để đảm bảo nét vẽ và tỷ lệ đồng bộ trên toàn hệ thống. |
| **Màu cam tiết chế** | Cam chủ đạo `#ff5200` dành cho hành động chính và điểm nhấn. Dùng quá nhiều sẽ làm loãng trọng tâm thị giác. |

### Nên / Không nên

**Nên:** Một nút cam nổi bật duy nhất, bo góc 8px (`--ghn-r-default`), tham chiếu token `--ghn-primary`.

**Không nên:** Nhiều nút cam cùng lúc với bo góc tùy ý (ví dụ 14px) — mất trọng tâm thị giác.

### Lưu ý import

Tất cả component import trực tiếp từ `antd` (không dùng package fork nào khác). Ứng dụng bắt buộc bọc `<GhnConfigProvider>` (hoặc `<ConfigProvider theme={ghnTheme}>`) để áp dụng brand GHN.


# Nền tảng

## Đường viền — Ổn định

Hệ thống đường viền GHN dùng để phân tách, gom nhóm và làm nổi bật thành phần giao diện một cách nhẹ nhàng, không gây phân tâm.

### Nguyên tắc cốt lõi — Nền hay viền: chọn một

Một bề mặt chỉ cần **một** tín hiệu để tách khỏi nền: nền khác tông, một đường viền, hoặc đổ bóng. Không chồng nhiều tín hiệu cùng lúc.

| Tình huống | Tín hiệu tách lớp | Viền? |
|---|---|---|
| Khối có nền xám/tint khác tông nền cha (callout, alert, tag mềm, panel, thẻ trên nền xám) | Nền | Bỏ viền |
| Khối cùng tông với nền (thẻ trắng trên nền trắng) | Một viền 1px hoặc đổ bóng nhẹ | Giữ một tín hiệu |
| Cần nâng khối nổi lên khỏi mặt phẳng | Đổ bóng (elevation) | Dùng shadow thay vì viền dày |
| Ô nhập, select, textarea, ô/hàng bảng, divider | Viền chức năng | Luôn giữ |
| Container đã có viền, bên trong có nhiều khối con | Khoảng cách / nền | Không lồng thêm viền |

> **Viền chức năng luôn giữ.** Ô nhập, select, ô bảng và divider dùng viền để báo vùng tương tác và phân tách dữ liệu. Quy tắc "bỏ viền" chỉ áp dụng cho viền trang trí bao quanh khối đã có nền riêng.

### Token độ dày

| Token | Giá trị | Mục đích |
|---|---|---|
| `--ghn-border-width` | 1px | Độ dày mặc định: thẻ, ô nhập, bảng, vùng phân tách |
| `--ghn-border-width-thick` | 2px | Nhấn mạnh, focus, trạng thái được chọn |

### Token màu viền

| Token | Mã màu | Dùng cho |
|---|---|---|
| `--ghn-border-color` | #d4d4d8 | Màu viền mặc định cho hầu hết thành phần |
| `--ghn-border-color-strong` | #a1a1aa | Viền hover, vùng cần tương phản cao |
| `--ghn-primary` | #ff5200 | Viền focus, lựa chọn đang hoạt động |
| `--ghn-dark-border` | #3f3f46 | Màu viền ở chế độ tối |

### Trạng thái viền

- **Mặc định:** 1px `#d4d4d8`
- **Hover:** 1px `#a1a1aa`
- **Focus:** 2px `#ff5200`
- **Lỗi:** 2px `#ff4d4f`

### Token bo góc liên quan

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-r-default` | 8px | Button, input, select, card, surface |
| `--ghn-r-tag` | 6px | Tag, pill nhỏ, token |
| `--ghn-r-card` | 12px | Surface lớn (preview, anatomy) |
| `--ghn-r-pill` | 999px | Switch, chip tròn, phần tử dạng viên thuốc |

### Nên / Không nên

**Nên:**
- Dùng viền ô nhập, select, textarea để báo vùng tương tác và trạng thái (default / hover / focus / lỗi).
- Phân tách ô và hàng trong bảng dữ liệu, divider giữa các nhóm nội dung.
- Tách thẻ/khối cùng tông với nền (trắng trên trắng) khi không có chênh lệch nền.
- Dùng viền 2px màu thương hiệu cho trạng thái focus và lựa chọn đang hoạt động.

**Không nên:**
- Bao viền quanh khối đã có nền xám/tint — nền đã tách lớp, viền là thừa.
- Lồng nhiều lớp viền (khối trong khối) — dùng khoảng cách và nền thay thế.
- Dùng viền dày 2px trung tính ở trạng thái bình thường — chỉ dành cho nhấn mạnh/focus.
- Dùng viền màu thương hiệu để trang trí khi không có tương tác/lựa chọn.

### Khả năng tiếp cận

- Trạng thái lỗi dùng viền đỏ phải kèm icon và/hoặc văn bản để người khó phân biệt màu vẫn nhận ra.
- Viền/vòng focus 2px màu `#ff5200` với offset 2px đạt ngưỡng tương phản 3:1 (WCAG 1.4.11).
- Viền mặc định `#d4d4d8` đạt tương phản tối thiểu 3:1 so với nền trắng.
- Chế độ tối: viền chuyển sang `#3f3f46` để không "biến mất" vào nền sẫm.

## Điểm ngắt & Lưới — Ổn định

Hệ điểm ngắt responsive và lưới 24 cột, mobile-first, dùng nhất quán trên mọi sản phẩm GHN.

### Nguyên tắc cốt lõi

GHN DS áp dụng **mobile-first**: thiết kế bắt đầu từ màn hình nhỏ nhất (sm) rồi mở rộng dần lên các cấp lớn hơn. Toàn bộ hệ thống dựa trên thang spacing 4-grid (`--ghn-s4` … `--ghn-s64`) và bộ token điểm ngắt chuẩn hóa.

### Điểm ngắt

Năm điểm ngắt chuẩn, kích hoạt khi chiều rộng khung nhìn **đạt hoặc vượt** giá trị tương ứng:

| Token | Giá trị | Cấp | Thiết bị điển hình |
|---|---|---|---|
| `--ghn-bp-sm` | 480px | sm | Điện thoại nhỏ và vừa, ưu tiên một cột |
| `--ghn-bp-md` | 768px | md | Máy tính bảng dọc, điện thoại lớn nằm ngang |
| `--ghn-bp-lg` | 1024px | lg | Máy tính bảng ngang, laptop nhỏ |
| `--ghn-bp-xl` | 1280px | xl | Laptop và desktop tiêu chuẩn |
| `--ghn-bp-xxl` | 1536px | xxl | Màn hình desktop rộng, độ phân giải cao |

### Lưới 24 cột

Lưới 24 cột chia đều thành 2, 3, 4, 6, 8 hoặc 12 phần. Gutter (khoảng đệm giữa cột) điều chỉnh theo điểm ngắt:

| Cấp | Gutter đề xuất | Token spacing |
|---|---|---|
| sm | 8px | `--ghn-s8` |
| md | 16px | `--ghn-s16` |
| lg · xl | 24px | `--ghn-s24` |
| xxl | 32px | `--ghn-s32` |

### Hành vi responsive chung

| Hành vi | Kích hoạt | Mô tả |
|---|---|---|
| Sidebar thành drawer | Dưới md (768px) | Thanh điều hướng bên ẩn, gọi qua nút bars và trượt ra dạng ngăn kéo phủ lớp nền mờ |
| Bố cục dọc | Dưới md (768px) | Các khối xếp ngang chuyển sang xếp dọc theo thứ tự ưu tiên nội dung |
| Ẩn cột phụ | Dưới lg (1024px) | Cột thông tin bổ trợ ẩn hoặc gom vào khu vực mở rộng để dành chỗ cho nội dung chính |

### Nên / Không nên

**Nên:**
- Thiết kế từ điểm ngắt sm trước, rồi mở rộng lên các cấp lớn hơn.
- Dùng token điểm ngắt và gutter theo thang spacing chuẩn.
- Ưu tiên giữ nội dung cốt lõi luôn hiển thị ở mọi điểm ngắt.
- Chú thích rõ cấp điểm ngắt và gutter sử dụng cho mỗi bố cục khi bàn giao thiết kế.

**Không nên:**
- Thiết kế cho desktop trước rồi cắt gọt để vừa màn hình nhỏ.
- Đặt giá trị điểm ngắt tùy ý ngoài năm cấp đã chuẩn hóa.
- Ẩn thông tin quan trọng chỉ để giải quyết thiếu không gian.
- Tạo điểm ngắt riêng cho từng trang; nếu bố cục cần ngắt ngoài năm cấp chuẩn, hãy xem lại cấu trúc nội dung trước.

## Màu sắc — Ổn định

Cam là màu thương hiệu duy nhất dùng làm điểm nhấn; phần còn lại là trung tính Zinc và màu trạng thái kế thừa Ant Design.

### Tổng quan

Hệ màu GHN xây quanh sắc cam thương hiệu **#ff5200**, dùng tiết chế để dẫn mắt tới hành động quan trọng nhất trên mỗi màn hình. Gồm 5 họ chính:

| Họ màu | Giá trị lõi (500) | Vai trò |
|---|---|---|
| Primary (cam) | `#ff5200` | Hành động chính, điểm nhấn |
| Secondary / Info (teal) | `#006fad` | Link, thông tin trung lập |
| Success | `#52c41a` | Trạng thái thành công |
| Warning | `#faad14` | Trạng thái cảnh báo |
| Error | `#ff4d4f` | Trạng thái lỗi |

Dải trung tính **Zinc** (#fafafa–#09090b, 11 bậc 50–950) chiếm phần lớn diện tích giao diện.

### Cấu trúc dải sắc độ (tonal ramp)

Mỗi họ có 10 bậc (50–900); Zinc có thêm bậc 950:

- **50–200 (rất nhạt):** nền mềm, tag/alert, hover nền nhẹ
- **400 (trung gian):** placeholder, icon phụ, viền nhấn
- **500 (lõi):** nền nút chính, icon trạng thái, chữ link — đây là sắc chuẩn của từng họ
- **600–700 (đậm):** hover (#ff7429 / 600), active (#d4490b / 700), chữ trên nền nhạt
- **800–900 (rất đậm):** chữ tương phản cao, viền đậm, nền tối

### Semantic tokens

| Token | Giá trị |
|---|---|
| `bg/primary` | `#ff5200` |
| `bg/secondary` | `#006fad` |
| `text/default` | `#09090b` |
| `text/muted` | `#52525b` |
| `text/inverse` | `#fafafa` |
| `border` | `#d4d4d8` |
| `bg/subtle` | `#fafafa` |
| `icon/default` | `#09090b` |
| `icon/primary` | `#ff5200` |

### Trạng thái tương tác (Primary)

- **Default:** `#ff5200` (bậc 500)
- **Hover:** `#ff7429`
- **Active:** `#d4490b`
- **Disabled:** nền nhạt + chữ muted
- **Chế độ tối:** cam dịu `#dc4903` trên nền `#141414`, chữ inverse `#fafafa`; container `#1f1f1f`

### Nguyên tắc

**Nên:**
- Chỉ dùng một nút cam `#ff5200` cho hành động chính trong mỗi nhóm; hành động phụ dùng nút mặc định hoặc viền trung tính
- Tham chiếu token ngữ nghĩa (ví dụ `bg/primary`) thay vì gõ HEX trực tiếp, để chế độ tối và cập nhật diễn ra tự động
- Chữ chính dùng `#09090b` trên nền sáng; chữ phụ dùng muted `#52525b`
- Màu trạng thái đúng nghĩa: xanh lá thành công, đỏ lỗi, vàng cảnh báo — luôn kèm icon và nhãn chữ

**Không nên:**
- Đặt nhiều nút cam cạnh nhau cùng lúc
- Dùng cam thay màu trạng thái (không báo lỗi bằng cam)
- Dùng chữ cam `#ff5200` cho đoạn văn dài (khó đọc)
- Đặt chữ teal `#006fad` lên nền cam
- Dùng chữ trắng cỡ nhỏ thường trên nền cam (chỉ đạt tương phản cho chữ lớn hoặc đậm)
- Dùng màu thuần tuỳ hứng không theo nghĩa ngữ nghĩa

### Khả năng tiếp cận

- Văn bản thường cần tương phản tối thiểu **4.5:1**; văn bản lớn và icon nhấn cần ít nhất **3:1**
- Vàng cảnh báo `#faad14` có tương phản thấp với chữ trắng — luôn dùng chữ tối `#09090b` trên nền vàng
- Trạng thái luôn đi kèm icon FontAwesome và nhãn chữ, không phân biệt chỉ bằng màu
- Phần tử tương tác có viền focus rõ ràng để người dùng bàn phím định vị

## Chế độ tối — Ổn định

Bảng màu nền tối phái sinh từ cùng seed thương hiệu, giữ nhất quán và tự động thích ứng cho mọi component.

### Tổng quan

Chế độ tối dùng `darkAlgorithm` phái sinh trực tiếp từ màu seed `#ff5200` — không định nghĩa thủ công từng giá trị. Token `--ghn-*` ở component tự trỏ sang giá trị tối khi chế độ này bật; không cần sửa cấp component.

### Token Dark (v3)

| Token | Giá trị | Ứng dụng |
|---|---|---|
| `--ghn-dark-bg` | `#141414` | Nền trang |
| `--ghn-dark-container` | `#1f1f1f` | Bề mặt nâng: thẻ, modal, panel |
| `--ghn-dark-primary` | `#dc4903` | Hành động chính, nhấn mạnh thương hiệu |
| `--ghn-dark-text` | `#fafafa` | Văn bản chính, tiêu đề |
| `--ghn-dark-text-muted` | `#a1a1aa` | Văn bản phụ, chú thích, placeholder |
| `--ghn-dark-border` | `#3f3f46` | Viền, đường phân cách |

### So sánh Light / Dark

| Token | Vai trò | Light | Dark |
|---|---|---|---|
| `--ghn-bg` | Nền trang | `#ffffff` | `#141414` |
| `--ghn-container` | Nền bề mặt nâng | `#fafafa` | `#1f1f1f` |
| `--ghn-text` | Văn bản chính | `#09090b` | `#fafafa` |
| `--ghn-text-muted` | Văn bản phụ | `#52525b` | `#a1a1aa` |
| `--ghn-border` | Viền mặc định | `#d4d4d8` | `#3f3f46` |
| `--ghn-primary` | Màu thương hiệu | `#ff5200` | `#dc4903` |

### Khả năng tiếp cận

- `#fafafa` trên `#141414` — tỉ lệ tương phản vượt 4.5:1, đạt WCAG AA cho văn bản thường.
- `#a1a1aa` trên `#141414` — đủ ngưỡng đọc được nhưng chỉ dùng cho nội dung không trọng yếu.
- Vòng focus: `--ghn-focus-width` 2px, offset 2px — tách bạch khỏi nền tối.
- Trạng thái disabled dùng `--ghn-opacity-disabled` 0.45, không đổi màu.
- Icon và viền cần đạt tối thiểu 3:1 so với nền liền kề.

### Nguyên tắc — Nên / Không nên

**Nên:**
- Dùng `#fafafa` trên `#141414` cho nội dung chính để đạt độ tương phản đủ.
- Phân lớp bề mặt tăng dần: nền tối nhất dưới cùng, container sáng hơn ở trên.
- Giảm chói primary xuống `#dc4903` để thoải mái thị giác trên nền tối.
- Luôn tham chiếu token ngữ nghĩa (`--ghn-bg`, `--ghn-container`, `--ghn-text`, `--ghn-primary`, `--ghn-border`) thay vì hardcode hex.
- Màu trạng thái (success/warning/error) đặt trên nền mờ nhẹ để giảm chói trên container tối.

**Không nên:**
- Đảo ngược màu ngẫu nhiên hay nghịch đảo trực tiếp giá trị hex của chế độ sáng.
- Dùng `#ff5200` nguyên bản trên nền tối — gây chói và lóa mắt.
- Dùng nền thuần đen `#000000` làm nền trang — tương phản quá gắt, mỏi mắt khi đọc lâu.
- Hardcode giá trị hex vào component thay vì dùng token `--ghn-*`.

## Đổ bóng — Ổn định

Hệ thống ba cấp bóng nhẹ, màu lạnh để phân tầng bề mặt trong giao diện GHN — không lạm dụng.

### Nguyên tắc

- **Bóng nhẹ, hướng xuống:** offset ngang = 0, offset dọc dương, nguồn sáng từ trên. Độ mờ giữ 0.05–0.16.
- **Bóng để phân tầng:** cấp bóng phản ánh thứ tự lớp. Không dùng bóng để nhấn mạnh hay gây chú ý.
- **Một cấp cho một vai trò:** thẻ luôn dùng sm, dropdown luôn dùng md, modal luôn dùng lg — không trộn lẫn.
- **Nền sáng làm chuẩn:** ở chế độ tối bóng kém hiệu quả, cần kết hợp viền và nền container đậm hơn.
- **Không chồng bóng:** một phần tử chỉ mang một cấp bóng duy nhất.

### Design tokens

| Token | Giá trị |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(16,24,40,.05)` |
| `shadow-md` | `0 4px 12px rgba(16,24,40,.1)` |
| `shadow-lg` | `0 12px 32px rgba(16,24,40,.16)` |
| `shadow-color` | `rgba(16,24,40, <opacity>)` |
| `shadow-dark-border` | nền `#1f1f1f` / viền `#d4d4d8` |
| `shadow-radius-default` | `8px` |
| `shadow-radius-overlay` | `12px` |
| `shadow-motion` | `150–200ms ease-out` |

### Thông số cấp bóng

| Cấp | Dời Y | Nhoè | Lan | Độ mờ | Dùng cho |
|---|---|---|---|---|---|
| `sm` | 1px | 2px | 0px | 0.05 | Thẻ (card), bề mặt phẳng |
| `md` | 4px | 12px | 0px | 0.10 | Dropdown, popover, menu ngữ cảnh |
| `lg` | 12px | 32px | 0px | 0.16 | Modal, drawer |

### Trạng thái

- Thẻ tương tác: nghỉ → `sm`, di chuột → `md` (chuyển tiếp 150–200ms ease-out).
- Bề mặt vô hiệu: giữ `sm`, giảm độ rõ nội dung.
- Lớp nổi tạm thời (`md`) và lớp che phủ (`lg`) không đổi cấp theo trạng thái.

### Hành vi

- Chuột: thẻ tương tác nâng sm → md khi hover, chuyển động 150–200ms.
- Chạm: không có hover; giữ nguyên cấp bóng nghỉ.
- Bàn phím/focus: bóng không thay vòng focus; vẫn hiển thị viền focus riêng.
- Responsive: giá trị bóng không đổi theo breakpoint.
- Giảm chuyển động: rút ngắn hoặc bỏ hiệu ứng khi người dùng bật prefers-reduced-motion.

### Nên / Không nên

**Nên:**
- Gán cấp theo vai trò: sm cho thẻ, md cho dropdown, lg cho modal.
- Dùng màu bóng lạnh `rgba(16,24,40)` với độ mờ thấp theo token.
- Ở chế độ tối, kết hợp viền `#d4d4d8` và nền container đậm để giữ ranh giới lớp.
- Kết hợp lớp phủ tối phía sau khi dùng modal/drawer (`shadow-lg`).

**Không nên:**
- Đặt `shadow-lg` cho dropdown nhỏ — khiến lớp nhẹ trông nặng hơn cả modal.
- Dùng bóng đen tuyền hoặc bóng màu thương hiệu (cam).
- Chỉ dựa vào bóng để tách lớp trên nền tối.
- Đổ bóng vào nút, input, tag ở trạng thái mặc định.
- Chồng nhiều cấp bóng hoặc tăng độ mờ để tạo bóng đậm.
- Dùng bóng thay viền/nền để phân tách nội dung trong cùng một lớp (header, sidebar, bảng).

## Biểu tượng — Ổn định

Bộ icon FontAwesome 6 Pro, đồng bộ cỡ và màu theo token, dùng xuyên suốt sản phẩm GHN.

### Tổng quan

GHN Design System dùng **FontAwesome 6 Pro** làm bộ biểu tượng chính thức. Font được nhúng cục bộ (không phụ thuộc CDN) với bốn trọng lượng: **Solid**, **Regular** (mặc định), **Light** và **Thin**.

### Nguyên tắc

1. **Một bộ duy nhất** — chỉ dùng FontAwesome 6 Pro; không trộn lẫn nhiều bộ icon khác nhau.
2. **Regular là mặc định** — dùng trọng lượng Regular cho hầu hết trường hợp; Solid để nhấn mạnh, Light/Thin cho ngữ cảnh nhẹ nhàng. Không trộn nhiều trọng lượng trong cùng một cụm.
3. **Đồng bộ cỡ với chữ** — kích thước icon bám theo cỡ chữ đi kèm (16px icon cho 14px chữ).
4. **Rõ nghĩa & tiết chế** — mỗi icon mang một nghĩa nhất quán; không lạm dụng để tránh nhiễu thị giác.

### Trọng lượng

| Class | Trọng lượng | Ghi chú |
|-------|-------------|---------|
| `fa-thin` | Thin (100) | Ngữ cảnh nhẹ nhàng |
| `fa-light` | Light (300) | Ngữ cảnh nhẹ nhàng |
| `fa-regular` / `fa` | Regular (400) | **Mặc định** |
| `fa-solid` | Solid (900) | Nhấn mạnh |

### Kích thước chuẩn

| Token | Giá trị | Dùng với |
|-------|---------|---------|
| `icon/size-sm` | `12px` | Chữ caption |
| `icon/size-md` | `16px` | Body 14 |
| `icon/size-lg` | `20px` | Body 16 |
| — | `24px` | Tiêu đề |

### Design tokens màu sắc

| Token | Giá trị | Dùng cho |
|-------|---------|---------|
| `icon/default` | `#09090B` | Icon trung tính mặc định |
| `icon/muted` | `#52525B` | Icon phụ, ít nổi bật |
| `icon/primary` | `#FF5200` | Icon dẫn hướng / thương hiệu |
| `icon/inverse` | `#FAFAFA` | Icon trên nền tối |
| `font-family` | `FontAwesome 6 Pro` | Solid / Regular / Light / Thin |

### Nên / Không nên

**Nên:**
- Dùng icon kèm nhãn chữ cho hành động quan trọng (vd icon trash + "Xoá").
- Giữ một trọng lượng nhất quán trong cùng một cụm/giao diện.
- Đồng bộ cỡ icon với cỡ chữ đi kèm.

**Không nên:**
- Không trộn FontAwesome với bộ icon khác.
- Không dùng icon-only cho hành động quan trọng mà thiếu nhãn/aria-label.
- Không phóng to icon mảnh (Thin/Light) ở cỡ nhỏ gây mờ, khó đọc.

### Khả năng tiếp cận

- **Trang trí** — icon đi cùng nhãn chữ: đặt `aria-hidden="true"` để trình đọc màn hình bỏ qua.
- **Mang nghĩa** — icon đứng một mình (nút chỉ-icon): cần `aria-label="Xoá"` trên nút.
- **Không chỉ dựa vào màu/icon** — trạng thái (thành công/lỗi) cần kèm chữ, không chỉ đổi icon/màu.
- **Vùng chạm** — nút chỉ-icon cần vùng chạm tối thiểu 24–44px.

## Trạng thái tương tác — Ổn định

Ma trận hover/focus/active/disabled/loading nhất quán cho mọi thành phần tương tác trong GHN Design System.

### Tổng quan

Mỗi thành phần đi qua sáu trạng thái cốt lõi: **default**, **hover**, **focus**, **active**, **disabled**, **loading**. Chuẩn hóa giúp người dùng nhận phản hồi rõ ràng và thao tác tự tin bằng cả chuột lẫn bàn phím.

### Ma trận trạng thái

| Trạng thái | Tín hiệu trực quan | Token chính |
|---|---|---|
| Hover | Đổi nền/viền nhạt hơn hoặc đậm hơn | `--ghn-primary-hover` |
| Focus | Vòng cam quanh phần tử | `--ghn-focus-width` |
| Active | Nền tối hơn, cảm giác nhấn xuống | `--ghn-primary-active` |
| Disabled | Giảm độ mờ xuống 0.45, không nhận con trỏ | `--ghn-opacity-disabled` |
| Loading | Spinner quay, khóa thao tác | `--ghn-duration-base` |

**Button:** nền primary (`--ghn-primary`), đổi nền khi hover/active, hiển thị ring cam khi focus bàn phím, opacity 0.45 khi disabled, spinner khi loading.

**Input:** viền đổi màu theo trạng thái; khi focus viền chuyển sang primary kèm ring cam mảnh (`outline-offset: 0`); nền `--ghn-neutral-50` khi disabled.

### Token — Focus ring

| Token | Giá trị | Mô tả |
|---|---|---|
| `--ghn-focus-width` | 2px | Độ dày vòng focus |
| `--ghn-focus-offset` | 2px | Khoảng cách vòng focus tới phần tử |

### Token — Độ mờ

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-opacity-disabled` | 0.45 | Thành phần bị vô hiệu hóa |
| `--ghn-opacity-muted` | 0.65 | Nội dung giảm nhấn |
| `--ghn-opacity-hover` | 0.85 | Lớp phủ khi hover |
| `--ghn-opacity-overlay` | 0.45 | Nền mờ phía sau modal |

### Token — Chuyển động

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-duration-fast` | 150ms | Hover, đổi màu, hiệu ứng nhỏ |
| `--ghn-duration-base` | 250ms | Chuyển trạng thái thông thường |
| `--ghn-duration-slow` | 400ms | Mở/đóng panel, lớp phủ lớn |
| `--ghn-ease-standard` | `cubic-bezier(.4,0,.2,1)` | Đường cong mặc định |

Ưu tiên `--ghn-duration-fast` (150ms) cho phản hồi tức thời như hover và active để giao diện luôn cảm thấy nhanh nhạy.

### Nguyên tắc

- **Mọi tương tác đều có phản hồi:** hover, nhấn, focus hay tải dữ liệu đều phải hiển thị thay đổi trực quan ngay lập tức.
- **Focus phải thấy rõ với bàn phím:** ring cam 2px xuất hiện khi điều hướng Tab, không che khuất nội dung.

### Nên / Không nên

**Nên:**
- Dùng `--ghn-primary-hover` và `--ghn-primary-active` để phân biệt rõ hover với active.
- Hiển thị spinner và khóa nút trong suốt thời gian loading để tránh nhấn lặp.
- Giữ ring focus đồng nhất ở mọi thành phần với độ dày 2px.
- Chuyển trạng thái mượt qua `--ghn-ease-standard`.
- Dùng kỹ thuật `focus-visible` để ring cam chỉ xuất hiện khi điều hướng Tab, không hiện khi nhấp chuột.
- Tôn trọng tùy chọn giảm chuyển động của hệ thống (`prefers-reduced-motion`).

**Không nên:**
- Ẩn ring focus chỉ vì lý do thẩm mỹ.
- Dùng cùng một màu cho cả hover lẫn active khiến người dùng khó nhận biết.
- Để nút disabled trông giống hệt nút bình thường.
- Đặt thời lượng chuyển động quá dài (trên 400ms) cho thao tác nhỏ.
- Dùng trạng thái disabled làm cách duy nhất để truyền đạt lỗi — phải bổ sung thông báo giải thích vì sao thao tác bị khóa.

## Chuyển động — Ổn định

Thời lượng và đường cong chuyển động nhất quán, tinh tế — làm rõ thay đổi trạng thái, định hướng sự chú ý và tạo phản hồi tức thì mà không gây xao nhãng.

### Thời lượng

Chọn thời lượng theo quy mô: phần tử càng nhỏ và càng gần con trỏ thì chuyển động càng nhanh.

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-duration-fast` | 150ms | Hover, focus, đổi màu, nút, tag, icon — phản hồi gần tức thì |
| `--ghn-duration-base` | 250ms | Mức phổ biến nhất: dropdown, popover, accordion, chuyển tab, di chuyển vị trí |
| `--ghn-duration-slow` | 400ms | Thành phần lớn và overlay: modal, drawer, lớp nền mờ, chuyển trang |

Khi nghi ngờ, dùng `--ghn-duration-base`. Tránh thời lượng dưới 100ms (cảm giác giật) hoặc trên 500ms (cảm giác chậm chạp).

### Đường cong

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-ease-standard` | cubic-bezier(.4, 0, .2, 1) | Mặc định: phần tử đã hiển thị di chuyển từ vị trí này sang vị trí khác |
| `--ghn-ease-in` | cubic-bezier(.4, 0, 1, 1) | Phần tử rời khỏi màn hình / biến mất — dùng cho trạng thái đóng |
| `--ghn-ease-out` | cubic-bezier(0, 0, .2, 1) | Phần tử đi vào màn hình / xuất hiện — dùng cho trạng thái mở |
| `--ghn-ease-emphasized` | cubic-bezier(.2, 0, 0, 1) | Chuyển động quan trọng cần nhấn mạnh: modal, drawer, thay đổi lớn |

### Nguyên tắc

- **Nhanh**: Chuyển động không bao giờ bắt người dùng phải chờ. Ưu tiên thời lượng ngắn để giao diện luôn cảm giác nhạy.
- **Có mục đích**: Mỗi chuyển động phải giải thích điều gì vừa xảy ra — dẫn hướng mắt, thể hiện quan hệ giữa các phần tử, xác nhận hành động.
- **Tôn trọng người dùng**: Luôn tuân theo `prefers-reduced-motion`. Chuyển động là lớp tăng cường, không bao giờ là điều kiện để hiểu hoặc thao tác giao diện.

### Nên / Không nên

**Nên:**
- Dùng `--ghn-ease-out` khi phần tử xuất hiện và `--ghn-ease-in` khi biến mất.
- Khớp thời lượng với quy mô: nhỏ dùng `fast` (150ms), overlay dùng `slow` (400ms).
- Chỉ làm chuyển động `transform` và `opacity` để giữ hiệu năng mượt.
- Giữ một hành động chỉ có một chuyển động rõ ràng, dễ đoán.

**Không nên:**
- Đặt thời lượng tùy ý nằm ngoài bộ token (ví dụ 320ms, 600ms).
- Làm chuyển động liên tục, lặp vô hạn ngoài trạng thái loading.
- Dùng đường cong nảy hoặc giật quá mức cho thao tác thường ngày.
- Bắt người dùng chờ hiệu ứng kết thúc mới thao tác tiếp được.

### Khả năng tiếp cận

Khi hệ điều hành bật `prefers-reduced-motion: reduce`, GHN rút gọn hoặc loại bỏ các hiệu ứng di chuyển, phóng to và trượt. Phần tử vẫn đổi trạng thái gần như tức thì; mọi thông tin vẫn được truyền đạt qua màu sắc, vị trí và nội dung. Không dùng chuyển động làm phương tiện duy nhất để truyền tải thông tin — mọi trạng thái phải nhận biết được kể cả khi tắt hoàn toàn hiệu ứng.

## Độ mờ — Ổn định

Các mức độ mờ chuẩn cho disabled, overlay và văn bản phụ trong GHN Design System.

### Tổng quan

Độ mờ điều chỉnh mức hiển thị của phần tử mà không thay đổi màu nền hay bố cục, dùng để thể hiện trạng thái và phân lớp giao diện. GHN DS định nghĩa bốn mức chuẩn gắn với ngữ cảnh cố định — luôn chọn token theo mục đích, không theo con số.

### Bảng token

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--ghn-opacity-disabled` | `.45` | Phần tử vô hiệu hóa: nút, ô nhập liệu, lựa chọn không khả dụng |
| `--ghn-opacity-muted` | `.65` | Nội dung phụ: chú thích, văn bản trợ giúp, icon thứ cấp |
| `--ghn-opacity-hover` | `.85` | Trạng thái hover nhẹ trên ảnh, thẻ, lớp phủ ảnh đại diện |
| `--ghn-opacity-overlay` | `.45` | Lớp phủ nền sau modal, drawer, popup |

> **Lưu ý:** `--ghn-opacity-disabled` và `--ghn-opacity-overlay` cùng giá trị `.45` nhưng khác ngữ cảnh — disabled áp lên chính phần tử, overlay áp lên lớp nền tối phủ toàn màn hình.

### Hướng dẫn phối hợp

- **Văn bản phụ trên nền sáng:** Ưu tiên token màu đặc `--ghn-neutral-600` thay vì giảm độ mờ, để giữ độ rõ khi nền đổi màu.
- **Lớp overlay modal/drawer:** Dùng `--ghn-opacity-overlay` kết hợp z-index `--ghn-z-modal-backdrop` (`1030`).
- **Hiệu ứng hover trên ảnh/thẻ:** Chuyển độ mờ bằng `--ghn-duration-base` (`250ms`) với `--ghn-ease-standard`.
- **Phần tử disabled:** Áp `--ghn-opacity-disabled` lên cả nhóm (nút và icon bên trong) để giảm đồng đều. Kết hợp con trỏ `not-allowed`.
- **Chế độ tối:** Giữ nguyên giá trị độ mờ; nền tối `#141414` và overlay `.45` đã cho độ tương phản phù hợp.

> **Cảnh báo:** Độ mờ áp dụng cho toàn bộ phần tử và mọi phần tử con. Khi chỉ muốn làm mờ nền, hãy dùng màu nền có độ trong suốt thay vì thuộc tính opacity của cả khối.

### Nên / Không nên

**Nên:**
- Dùng `--ghn-opacity-disabled` cho mọi phần tử không khả dụng để giữ tín hiệu nhất quán.
- Dùng overlay `.45` trên nền tối để tách hộp thoại khỏi nội dung phía sau.
- Kết hợp độ mờ với con trỏ `not-allowed` cho trạng thái disabled.
- Ưu tiên token màu neutral đặc cho văn bản phụ khi cần độ tương phản cao.

**Không nên:**
- Dùng độ mờ tùy ý như `.5` hay `.7` thay cho token chuẩn.
- Giảm độ mờ văn bản chính khiến tương phản không đạt chuẩn truy cập.
- Chồng nhiều lớp mờ lên nhau làm màu kết quả khó dự đoán.
- Dùng độ mờ để tạo màu mới thay vì lấy từ ramp màu sẵn có.

## Khoảng cách & Bo góc — Ổn định

Lưới 4px và bo góc mặc định 8px tạo nhịp điệu thị giác nhất quán cho toàn bộ sản phẩm GHN.

### Nguyên tắc

1. **Bám lưới 4.** Mọi khoảng cách (padding, margin, gap) phải là bội số của 4px. Không dùng giá trị lẻ như 5, 7, 10, 15px.
2. **Dùng bậc trong thang.** Chỉ chọn từ thang chuẩn: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64** (px). Bước nhảy tăng dần phản ánh cách mắt cảm nhận khoảng trống.
3. **Bo góc mặc định 8px.** Mọi control và surface dùng 8px. Chỉ lệch khi có lý do rõ ràng (tag nhỏ, switch bo tròn, modal lớn).
4. **Khoảng cách thể hiện quan hệ.** Phần tử liên quan đặt gần nhau; khoảng cách trong nhóm luôn nhỏ hơn khoảng cách giữa các nhóm.

### Thang khoảng cách (Spacing tokens)

| Token | Giá trị | Dùng cho |
|---|---|---|
| spacing-2xs | 4px | Gap icon ↔ nhãn, dòng trong nhóm |
| spacing-xs | 8px | Gap control nhỏ, padding gọn |
| spacing-sm | 12px | Gap trong cụm form, giữa nút |
| spacing-md | 16px | Padding thẻ/panel, khoảng cách trường (mặc định) |
| spacing-lg | 24px | Tách khối nội dung, padding modal/drawer |
| spacing-xl | 32px | Khoảng cách giữa section trong trang |
| spacing-2xl | 48px | Lề lớn trên desktop |
| spacing-3xl | 64px | Lề trang, khoảng trống hero |
| grid-base | 4px | Đơn vị cơ sở lưới |

### Bo góc (Radius tokens)

| Token | Giá trị | Áp dụng |
|---|---|---|
| radius-sm | 6px | Tag |
| radius (**mặc định**) | 8px | Nút, ô nhập, select, thẻ, menu, popover, pagination, segmented |
| radius-lg | 12px | Modal, drawer |
| radius-xl | 16px | Surface lớn, banner |
| radius-full | 9999px | Switch, avatar tròn, chip tròn |

### Nên / Không nên

**Nên:**
- Dùng bậc nhỏ (4 · 8 · 12px) cho khoảng cách bên trong thành phần (icon ↔ nhãn, padding ô nhập).
- Dùng bậc lớn (24 · 32 · 48 · 64px) để tách khối nội dung, section, lề ngoài bố cục.
- Giữ khoảng cách trong nhóm nhỏ hơn khoảng cách giữa các nhóm (ví dụ: 4px giữa nhãn–mô tả, 16px giữa các trường form).
- Dùng bo góc 8px mặc định nhất quán cho các control cùng cấp.
- Chọn bậc gần nhất trong thang khi cần điều chỉnh (cần "giữa 8 và 16" → dùng 12px).

**Không nên:**
- Dùng giá trị lẻ ngoài thang (5, 10, 14, 18, 20px) để "căn cho vừa mắt".
- Đặt bán kính bo góc khác nhau cho các control cùng cấp trong một màn hình.
- Trộn nhiều bán kính trên cùng cấp phần tử (ví dụ: nút bo 4px, ô nhập bo 12px).
- Đặt khoảng cách trong nhóm bằng hoặc lớn hơn khoảng cách giữa các nhóm.
- Tạo giá trị tuỳ ý ngoài thang — phá vỡ tính nhất quán và khó bảo trì.

### Hành vi & Tiếp cận

- Vùng chạm tối thiểu **44×44px** (WCAG 2.5.5); dùng padding vô hình để đạt kích thước khi phần hiển thị nhỏ hơn.
- Khoảng hở tối thiểu **≥ 8px** giữa các nút/liên kết liền kề để tránh bấm nhầm.
- Viền focus **2px**, tương phản tối thiểu 3:1 với nền; bo góc không che mất viền focus.
- Bo góc **không thay đổi** qua các trạng thái (focus, lỗi, vô hiệu) — chỉ màu và độ dày viền thay đổi.
- Responsive: trên mobile ưu tiên bậc nhỏ hơn cho lề ngoài (16px thay vì 24/32px); desktop dùng bậc lớn (32 · 48 · 64px). Bo góc giữ nguyên ở mọi breakpoint.

## Kiểu chữ — Ổn định

GHN Design System dùng duy nhất một bộ chữ **Inter** cho mọi giao diện — không trộn font, không dùng monospace.

### Nguyên tắc cốt lõi

1. **Một bộ chữ duy nhất.** Mọi văn bản đều dùng Inter. Cấp bậc tạo ra bằng cỡ chữ, trọng lượng và màu — không bao giờ bằng cách đổi font.
2. **Phân cấp rõ ràng.** Mỗi màn hình chỉ có một H1. Cỡ chữ giảm dần theo mức quan trọng.
3. **Dễ đọc trước, đẹp sau.** Ưu tiên độ tương phản, độ dài dòng 60–75 ký tự và khoảng cách dòng hợp lý.
4. **Nhất quán theo token.** Chỉ dùng các bậc cỡ chữ đã định nghĩa trong thang; không tạo cỡ chữ tuỳ ý ngoài hệ thống.

### Thang cỡ chữ (Design Tokens)

| Token | Cỡ chữ | Chiều cao dòng | Trọng lượng | Vai trò |
|---|---|---|---|---|
| font-size-h1 | 38px | 46px (1.2) | 700 | Tiêu đề trang, mỗi màn chỉ dùng một lần |
| font-size-h2 | 30px | 38px (1.25) | 700 | Tiêu đề mục lớn |
| font-size-h3 | 24px | 32px (1.35) | 600 | Tiêu đề mục con, tiêu đề card hoặc dialog |
| font-size-h4 | 20px | 28px (1.4) | 600 | Tiêu đề nhóm trường trong form/bảng |
| font-size-h5 | 16px | 24px (1.5) | 600 | Nhãn nhóm, tiêu đề dòng danh sách |
| font-size-body | 16px | 26px (1.6) | 400 | Nội dung thân bài mặc định |
| font-size-body-sm | 14px | 22px (1.55) | 400 | Nội dung phụ, nhãn nút, trường nhập liệu, bảng dữ liệu |
| font-size-caption | 12px | 18px (1.5) | 400 | Cỡ nhỏ nhất được phép: chú thích, nhãn thời gian, văn bản trợ giúp |
| font-family | Inter | — | — | Bộ chữ duy nhất |
| letter-spacing | 0.1px | — | — | Áp dụng toàn bộ văn bản |

### Trọng lượng (Weight)

| Trọng lượng | Giá trị | Dùng cho |
|---|---|---|
| Regular | 400 | Nội dung thân bài, mô tả, văn bản đọc liên tục |
| Medium | 500 | Nhấn nhẹ trong câu, nhãn phụ, số liệu cần làm nổi |
| Semibold | 600 | Tiêu đề mục (H3–H5), nhãn nút, tiêu đề bảng |
| Bold | 700 | Tiêu đề lớn (H1–H2), số liệu quan trọng nhất |

### Màu chữ (Token màu)

| Token | Giá trị | Vai trò |
|---|---|---|
| text | #09090b | Văn bản chính (mặc định) |
| text-muted | #52525b | Văn bản phụ (đủ chuẩn WCAG AA) |
| text-placeholder | #71717a | Gợi ý nhập liệu |
| Link | #006fad | Liên kết |
| Success | #52c41a | Thành công |
| Error | #ff4d4f | Lỗi |

### Nên / Không nên

**Nên:**
- Giới hạn độ dài dòng thân bài trong khoảng 60–75 ký tự.
- Dùng cỡ chữ và trọng lượng để tạo cấp bậc (tiêu đề lớn+đậm, thân bài nhỏ+thường).
- Mỗi màn chỉ có một H1; các mục dưới giảm dần cấp bậc theo thứ tự.
- Dùng đúng cấp tiêu đề theo thứ tự (H1 → H2 → H3) để hỗ trợ trình đọc màn hình.

**Không nên:**
- Đưa thêm bất kỳ bộ chữ nào khác (kể cả monospace cho mã vận đơn).
- Đặt cỡ chữ ngoài thang đã định hoặc dùng chữ nhỏ hơn 12px cho nội dung cần đọc.
- Để dòng văn bản kéo dài hết chiều rộng màn hình lớn.
- Tạo cấp bậc bằng cách đổi font hay viết hoa toàn bộ cả đoạn dài.
- Đặt nhiều tiêu đề cùng cỡ lớn cạnh nhau.
- Dùng chữ quá nhạt — màu phụ tối thiểu là #52525b.
- Viết hoa toàn bộ cho đoạn văn dài hoặc dùng trọng lượng quá mảnh ở cỡ chữ nhỏ.
- Truyền nghĩa trạng thái (lỗi, thành công) chỉ bằng màu chữ — phải kèm chữ hoặc biểu tượng.

### Responsive

Trên màn hình nhỏ, các bậc tiêu đề lớn có thể giảm một bậc (H1 38px xuống 30px) để giữ độ dài dòng hợp lý. Thân bài giữ tối thiểu 16px, chú thích tối thiểu 12px.

## Phân lớp (Z-index) — Ổn định

Thang z-index chuẩn để xếp lớp các bề mặt nổi trong GHN Design System, đảm bảo phần tử nổi luôn hiển thị đúng vị trí so với nội dung bên dưới.

### Tổng quan

GHN Design System định nghĩa một thang z-index nhất quán cho mọi lớp nổi. Toàn bộ giá trị nằm trong khoảng **1000 đến 1070**, với khoảng cách **10 đơn vị** giữa các lớp, đủ rộng để chèn lớp phụ khi cần mà không phá vỡ trật tự tổng thể.

**Quan trọng:** Luôn dùng token `--ghn-z-*` thay vì gán số trực tiếp. Việc này giữ cho thứ tự lớp ổn định trên toàn hệ thống và dễ điều chỉnh tập trung.

### Bảng token

| Token | Giá trị | Lớp | Áp dụng cho |
|---|---|---|---|
| `--ghn-z-dropdown` | 1000 | Dropdown | Menu, select, cascader, autocomplete |
| `--ghn-z-sticky` | 1010 | Sticky | Header dính, thanh công cụ dính khi cuộn |
| `--ghn-z-fixed` | 1020 | Fixed | Thanh điều hướng cố định, nút hành động nổi |
| `--ghn-z-modal-backdrop` | 1030 | Modal backdrop | Lớp phủ mờ phía sau hộp thoại |
| `--ghn-z-modal` | 1040 | Modal | Hộp thoại, drawer, panel trung tâm |
| `--ghn-z-popover` | 1050 | Popover | Popover, popconfirm, menu ngữ cảnh |
| `--ghn-z-toast` | 1060 | Toast | Thông báo nổi, message tạm thời |
| `--ghn-z-tooltip` | 1070 | Tooltip | Gợi ý ngắn, lớp cao nhất luôn hiển thị |

Khoảng cách 10 đơn vị giữa các lớp cho phép thêm lớp trung gian (ví dụ một backdrop phụ) bằng giá trị lẻ như 1035 mà không cần dịch chuyển toàn bộ thang.

### Nguyên tắc

**Nên:**
- Gán z-index bằng token `--ghn-z-*` tương ứng với vai trò của lớp.
- Đặt tooltip ở lớp cao nhất để luôn đọc được trên mọi thành phần khác.
- Giữ modal-backdrop ngay dưới modal để lớp phủ và hộp thoại đi cùng nhau.
- Tận dụng khoảng cách 10 đơn vị khi cần chèn lớp phụ.

**Không nên:**
- Gán số z-index tuỳ tiện như 9999 để "đè lên mọi thứ".
- Tạo giá trị riêng nằm ngoài thang token đã định nghĩa.
- Đảo thứ tự khiến toast hoặc tooltip bị modal che mất.
- Dùng cùng một giá trị cho hai lớp khác vai trò.

### Hướng dẫn chọn lớp

| Tình huống | Lớp khuyến nghị | Ghi chú |
|---|---|---|
| Menu thả xuống từ một nút hoặc ô chọn | `--ghn-z-dropdown` | Nằm trên nội dung nhưng dưới các lớp chặn tương tác. |
| Header giữ nguyên vị trí khi cuộn trang | `--ghn-z-sticky` | Đủ cao để che nội dung cuộn bên dưới. |
| Thanh điều hướng hoặc nút nổi cố định | `--ghn-z-fixed` | Trên sticky, dưới lớp hộp thoại. |
| Hộp thoại cần chặn thao tác phía sau | `--ghn-z-modal-backdrop` + `--ghn-z-modal` | Backdrop ngay dưới, modal ngay trên, luôn đi thành cặp. |
| Popover, popconfirm mở từ trong modal | `--ghn-z-popover` | Cao hơn modal để không bị hộp thoại che. |
| Thông báo nổi sau một hành động | `--ghn-z-toast` | Hiển thị trên hầu hết lớp khác, dưới tooltip. |
| Gợi ý ngắn khi di chuột hoặc focus | `--ghn-z-tooltip` | Lớp cao nhất, luôn đọc được trong mọi ngữ cảnh. |

Khi một thành phần kết hợp nhiều lớp (ví dụ tooltip mở bên trong modal), hệ thống token tự xử lý thứ tự đúng vì tooltip 1070 luôn cao hơn modal 1040.


# Cơ bản

## Button — Ổn định

Nút kích hoạt hành động ngay lập tức — gửi biểu mẫu, mở hộp thoại, xác nhận hoặc huỷ thao tác — là điểm chạm tương tác phổ biến nhất trong sản phẩm GHN.

`import { Button } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: kích hoạt hành động (gửi form, lưu, xoá, xác nhận), mở hộp thoại/ngăn kéo/lớp phủ, thực thi thao tác nghiệp vụ (tạo đơn, in vận đơn, gán tài xế), làm nổi bật bước hành động chính.
- KHÔNG dùng: chỉ điều hướng sang trang khác (dùng link màu `#006fad`); bật/tắt trạng thái hai chiều (dùng Switch hoặc Checkbox); chọn một trong nhiều phương án loại trừ (dùng Radio hoặc Select); hiển thị trạng thái tĩnh không tương tác (dùng Tag hoặc Badge).

**Nên / Không nên**
- Nên: ghép một nút Primary với một nút phụ (Outline/Text), nhãn có động từ rõ ràng ("Lưu thay đổi", "Tạo đơn hàng"), đặt icon trước nhãn để củng cố ý nghĩa.
- Không nên: đặt hai nút Primary cạnh nhau; dùng nhãn mơ hồ như "OK" hay "Tiếp"; có quá nhiều nút nổi bật trên cùng một vùng.

**Biến thể, kích thước & trạng thái**
- Biến thể (5): **Primary** — nền `#ff5200`, hành động chính; **Outline** — viền `#d4d4d8`, hành động phụ; **Default** — nền `#fafafa`, trung tính; **Secondary** — nền `#fff2e6`, hành động bổ trợ; **Text** — không nền/viền, chữ `#006fad`, hành động thứ yếu.
- Kích thước (3): Large 44px (form quan trọng, cảm ứng), Medium 36px (mặc định, hầu hết bối cảnh), Small 28px (dòng bảng, thẻ nhỏ, bộ lọc gọn).
- Trạng thái: Default → Hover (`#ff7429`) → Active (`#d4490b`) → Disabled (giảm độ mờ, bỏ qua Tab) → Loading (spinner quay, khoá tương tác, giữ nguyên độ rộng).
- Icon: luôn đặt trước nhãn, cùng tông màu với chữ, khoảng cách `8px`.

**Design tokens**
- `var(--ghn-primary)` — `#ff5200` — nền Primary, màu vòng focus
- `var(--ghn-primary-hover)` — `#ff7429` — nền Primary khi hover
- `var(--ghn-primary-active)` — `#d4490b` — nền Primary khi nhấn
- `var(--ghn-primary-soft)` — `#fff2e6` — nền Secondary
- `var(--ghn-secondary)` / link — `#006fad` — chữ Text, Secondary
- `var(--ghn-text)` — `#09090b` — chữ Outline và Default
- `var(--ghn-border)` — `#d4d4d8` — viền Outline và Default
- `var(--ghn-bg-subtle)` — `#fafafa` — nền Default
- `var(--ghn-muted)` — `#52525b` — chữ disabled
- Bo góc `8px`, spacing icon–nhãn `8px`, font Inter, letter-spacing `.1px`

**Khả năng tiếp cận**
- Nút chỉ có icon bắt buộc khai báo `aria-label` (ví dụ: `aria-label="Xoá"`).
- Kích hoạt bằng `Enter` hoặc `Space`; điều hướng bằng `Tab` / `Shift+Tab`; nút disabled bị loại khỏi luồng Tab.
- Vòng focus rõ nét màu `#ff5200` chỉ hiện khi điều hướng bằng bàn phím.
- Icon đi kèm nhãn đánh dấu `aria-hidden="true"` để tránh đọc trùng.
- Mọi tổ hợp màu nút đạt ngưỡng tương phản WCAG AA (chữ trắng `#fff` trên nền `#ff5200`).
- Khi loading, nút thông báo "đang xử lý" cho trình đọc màn hình và phải bị vô hiệu hoá để tránh bấm hai lần.

## Command (Bảng lệnh) — Ổn định

> ⚠️ **KHÔNG có trong `antd`.** Đây là component GHN-custom — vanilla Ant Design không export `Command`. Phải tự dựng (vd dùng `cmdk`) theo các nguyên tắc dưới, hoặc bỏ qua. AI: đừng `import { Command } from 'antd'`.

Panel nổi dạng ⌘K cho phép người dùng tìm kiếm và thực thi nhanh các hành động, điều hướng hoặc dữ liệu chỉ bằng bàn phím mà không cần rời khỏi luồng làm việc hiện tại.

`import { } from 'antd';`
> Command là pattern tùy chỉnh của GHN, không phải component antd gốc. Triển khai dùng `Input`, `Modal` hoặc overlay tùy chỉnh kết hợp với logic lọc/nhóm từ dữ liệu ứng dụng.

**Khi nào dùng / KHÔNG dùng**
- Dùng khi ứng dụng có nhiều màn hình/hành động và người dùng thành thạo muốn nhảy nhanh giữa chúng.
- Dùng để gộp nhiều loại kết quả (điều hướng, hành động, tìm đơn hàng, đổi cài đặt) vào một ô tìm kiếm duy nhất.
- Dùng khi tốc độ thao tác lặp lại hằng ngày là quan trọng — ví dụ nhân viên vận hành tra cứu đơn liên tục.
- Dùng như lối tắt bổ sung song song với menu, không phải thay thế.
- KHÔNG dùng cho các tác vụ cần biểu mẫu nhiều trường hay nhiều bước — hãy dùng trang/Modal riêng.
- KHÔNG dùng làm phương tiện điều hướng duy nhất; người dùng mới sẽ không khám phá ra được.
- KHÔNG dùng cho ứng dụng quá nhỏ với chỉ vài màn hình — chi phí học phím tắt không đáng.
- KHÔNG dùng để hiển thị nội dung cần đọc kỹ hay so sánh nhiều — đó là việc của bảng dữ liệu hoặc trang chi tiết.

**Nên / Không nên**
- Nên: Luôn làm nổi đúng một mục và để mục đầu tiên tự được chọn khi gõ, để Enter luôn có hành động rõ ràng.
- Không nên: Để danh sách không có mục nào được chọn, khiến người dùng nhấn Enter mà không biết điều gì xảy ra.
- Nên: Nhóm kết quả theo loại và đặt tiêu đề nhóm rõ ràng, sắp các hành động hay dùng lên đầu.
- Không nên: Đổ tất cả vào một danh sách phẳng dài không phân loại, buộc người dùng đọc từng dòng.
- Nên: Hiển thị phím tắt bên cạnh các hành động phổ biến để người dùng học dần và tăng tốc theo thời gian.
- Không nên: Giấu hoàn toàn việc bảng lệnh tồn tại — hãy đặt gợi ý "⌘K" ở thanh tìm kiếm hoặc menu.
- Nên: Dùng nhãn hành động ngắn gọn, bắt đầu bằng động từ ("Tạo đơn hàng mới", "In phiếu giao").
- Không nên: Dùng nhãn dài, mơ hồ hoặc thuật ngữ kỹ thuật khiến người dùng phải đoán mục đó làm gì.

**Biến thể, kích thước & trạng thái**
- Biến thể: Trạng thái rỗng (chưa gõ — hiện gợi ý gần đây/phổ biến), kết quả có nhóm (đang gõ — lọc và nhóm theo loại, làm nổi từ khóa khớp màu primary), không có kết quả (hiện thông báo trống kèm từ khóa), chế độ con/sub-command (đào sâu hành động cho đối tượng đã chọn — ô tìm gắn "chip" ngữ cảnh).
- Kích thước chuẩn: panel rộng 560px (desktop), chiều cao danh sách tối đa 400px, ô tìm cao 48px, mỗi mục kết quả 40px, cách đỉnh màn hình 96px, bo góc 8px, padding ngang 16px.
- Trạng thái mục: Mặc định, Được chọn (active — nền `#fff2e6`, icon primary `#ff5200`), Hover (nền `#fafafa`), Vô hiệu (opacity 50%, không nhận focus), Đang tải (spinner), Trống (empty state).

**Design tokens**
- `var(--ghn-white)` / `#fff` — nền panel
- `var(--ghn-soft)` / `#fff2e6` — nền mục được chọn (active)
- `var(--ghn-primary)` / `#ff5200` — icon và từ khóa khớp ở mục active
- `var(--ghn-text)` / `#09090b` — nhãn mục kết quả
- `var(--ghn-muted)` / `#52525b` — tiêu đề nhóm, gợi ý phím, footer
- `var(--ghn-placeholder)` / `#71717a` — placeholder ô tìm
- `var(--ghn-border)` / `#d4d4d8` — đường phân cách
- `var(--ghn-bg-subtle)` / `#fafafa` — nền footer gợi ý phím
- `var(--ghn-error)` / `#ff4d4f` — mục hủy/xóa trong sub-command
- Đổ bóng: `shadow-lg` — `0 12px 32px rgba(9,9,11,0.18)`
- Overlay nền: `rgba(9,9,11,0.45)`

**Khả năng tiếp cận**
- Ô tìm là `combobox` với `aria-expanded`; danh sách là `listbox`; mỗi mục là `option`.
- Focus DOM ở yên trên ô tìm; `aria-activedescendant` trỏ tới id mục đang được làm nổi để trình đọc màn hình thông báo đúng.
- Panel có `role="dialog"` kèm `aria-label`; ô tìm có `aria-label` mô tả rõ.
- Bẫy focus (focus trap): Tab không thoát ra ngoài khi panel mở; đóng panel trả focus về phần tử đã kích hoạt.
- Số lượng kết quả thông báo qua vùng `aria-live` lịch sự.
- Tôn trọng `prefers-reduced-motion`: tắt animation trượt/phóng, chỉ đổi opacity.
- Tương phản chữ đạt tối thiểu AA; trạng thái chọn kết hợp thay đổi nền + đậm, không chỉ dùng màu.

## Float Button — Kế thừa

Nút hành động tròn ghim cố định góc dưới phải màn hình, luôn nổi trên nội dung để cung cấp thao tác quan trọng dễ tiếp cận ở mọi vị trí cuộn trang.

`import { FloatButton } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi có một hành động chính lặp lại thường xuyên trên màn hình dài (ví dụ "Tạo đơn mới" trên danh sách đơn hàng).
- Dùng khi cần thao tác luôn sẵn sàng trong khi người dùng cuộn qua nhiều nội dung.
- Dùng khi muốn gom nhiều thao tác phụ liên quan vào một menu bung ra gọn gàng.
- Dùng trên màn hình bản đồ hoặc danh sách cuộn vô hạn nơi nội dung chiếm trọn không gian.
- KHÔNG dùng khi hành động đã có nút rõ ràng trong luồng bố cục (header hoặc thanh công cụ).
- KHÔNG dùng khi có quá nhiều thao tác ngang hàng — nên dùng thanh công cụ thay vì nhiều nút nổi.
- KHÔNG dùng khi nút sẽ che khuất nội dung quan trọng như thông tin đơn hàng hay nút điều hướng.
- KHÔNG dùng trên màn hình ngắn, tĩnh, không cần cuộn — nút thường trong luồng là đủ.

**Nên / Không nên**
- Nên: dùng một icon đơn giản, phổ quát (fa-plus cho "tạo mới") kèm `aria-label` mô tả rõ ràng.
- Nên: giữ duy nhất một Float Button cho hành động quan trọng nhất trên mỗi màn hình.
- Nên: đặt nút cách mép 24px, đảm bảo không che khuất nội dung hay nút quan trọng khác.
- Không nên: nhồi nhét nhiều ký hiệu, chữ viết tắt hoặc icon mơ hồ khiến người dùng không đoán được hành động.
- Không nên: đặt nhiều nút nổi cạnh nhau cùng lúc, làm rối góc màn hình và phân tán sự chú ý.
- Không nên: để nút đè lên nội dung chính, thanh điều hướng dưới hoặc các phần tử cần thao tác thường xuyên.

**Biến thể, kích thước & trạng thái**
- Biến thể: Nút đơn (Single) — một hành động kích hoạt ngay; Nút nhóm (Group) — bung menu các nút phụ xếp dọc; Nút về đầu trang (Back to top) — nền trắng, icon fa-chevron-up, chỉ hiện khi cuộn.
- Kích thước: Mặc định 56×56px (icon 18px, nút phụ 44px); Nhỏ 40×40px (icon 14px, nút phụ 32px).
- Trạng thái: Mặc định, Hover (#ff7429, bóng đậm), Active (#d4490b, bóng nhẹ), Focus (viền 2px solid primary), Loading (spinner xoay, tạm khóa), Disabled (mờ 60%).
- Hành vi nhóm: icon trigger chuyển từ fa-plus sang fa-xmark khi menu mở; menu bung bằng hiệu ứng fade + slide 200–250ms; nhấn Esc đóng menu và trả focus về nút chính.

**Design tokens**
- Nền nút chính: `var(--ghn-primary)` → #ff5200
- Hover: `var(--ghn-primary-hover)` → #ff7429 (kèm bóng `0 8px 20px rgba(9,9,11,.24)`)
- Active: `var(--ghn-primary-active)` → #d4490b
- Icon trên nền primary: `var(--ghn-on-primary)` → #fff
- Nền nút trung tính (back-to-top / nút phụ): `var(--ghn-white)` → #fff
- Icon trung tính: `var(--ghn-text)` → #09090b
- Bóng mặc định: `0 6px 16px rgba(9,9,11,.18)`
- Khoảng ghim mép: 24px (dưới & phải); khoảng cách giữa nút phụ: 12px
- Bo góc: 50% (hình tròn); Viền focus: `2px solid var(--ghn-primary)`

**Khả năng tiếp cận**
- Bắt buộc có `aria-label` cho mọi nút (chính và phụ) vì không có nhãn chữ hiển thị.
- Nút nhóm phải có `aria-expanded` trên trigger để thông báo trạng thái mở/đóng cho trình đọc màn hình.
- Dùng phần tử `<button>` thực sự để hỗ trợ kích hoạt bằng Enter và Space.
- Hỗ trợ đầy đủ Tab / Enter / Space / Esc; viền focus rõ ràng không chỉ dựa vào màu.
- Vùng chạm tối thiểu 44×44px; khi dùng kích thước nhỏ 40px cần thêm vùng đệm chạm vô hình.
- Tôn trọng tùy chọn giảm chuyển động của hệ thống (`prefers-reduced-motion`).


# Bố cục

## Divider — Kế thừa

Đường kẻ mảnh phân tách nội dung theo chiều ngang hoặc dọc, giúp người dùng nhận ra ranh giới logic giữa các nhóm thông tin trong giao diện GHN.

`import { Divider } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Nên dùng: ngăn cách nhóm thông tin trong cùng một thẻ (người gửi / người nhận trên phiếu vận đơn), tách nhóm mục trong menu hoặc danh sách hành động, phân tách tiêu đề khỏi nội dung bên dưới, tách hai nhóm nút bằng Divider dọc, tạo dải "HOẶC" giữa hai phương án.
- KHÔNG dùng: khi chỉ cần tạo khoảng cách — dùng margin/padding thay vì vẽ thêm đường kẻ; không dùng để bao quanh/đóng khung nội dung (việc của Card hoặc viền); không đặt liên tiếp nhiều Divider tạo cảm giác kẻ ô như bảng tính; không dùng thay cho tiêu đề khi nội dung cần heading rõ ràng; không tô màu đậm (cam primary) để gây chú ý.

**Nên / Không nên**
- Nên: dùng một Divider mảnh 1px màu nhạt `#e4e4e7`, khoảng đệm đều theo lưới 4px (8/12/16/24px).
- Nên: Divider dọc có chiều cao khớp dòng chữ (14–20px), đệm hai bên đều nhau (12px).
- Không nên: tô màu cam primary và làm đường kẻ dày — Divider trở thành điểm nhấn sai chỗ.
- Không nên: để Divider dọc cao vượt dòng chữ và sát chữ — trông như lỗi bố cục.
- Không nên: lạm dụng Divider; ưu tiên khoảng trắng trước khi nghĩ tới việc thêm đường kẻ.
- Nếu có nhãn giữa, dùng từ ngắn (HOẶC, Hôm nay, Đã giao) — nhãn dài làm mất vai trò phân tách.

**Biến thể, kích thước & trạng thái**
- Biến thể: ngang trơn, ngang có nhãn giữa (căn giữa / căn trái / căn phải), dọc, kẻ đứt (dashed).
- Không có biến thể kích thước riêng; điều chỉnh qua khoảng đệm xung quanh.
- Độ dày: luôn 1px. Khoảng đệm dọc: 8px (gọn), 16px (mặc định), 24px (rộng). Khoảng cách nhãn–đường kẻ: 12px. Chiều cao Divider dọc: 14–20px.
- Kiểu kẻ đứt (dashed/`variant`) gợi ý ranh giới mềm hoặc tạm thời.

**Design tokens**
- `var(--ghn-neutral-200)` → `#e4e4e7` — màu đường kẻ mặc định (`divider.color`)
- `divider.color.subtle` → `#fafafa` — đường kẻ rất nhạt trên nền màu
- `divider.thickness` → `1px`
- `divider.label.color` → `#52525b` (muted) — màu chữ nhãn giữa
- `divider.label.size` → `13px`; `divider.label.gap` → `12px`
- `divider.spacing.sm` → `8px`; `divider.spacing.md` → `16px`; `divider.spacing.lg` → `24px`
- `divider.vertical.height` → `20px`

**Khả năng tiếp cận**
- Dùng vai trò `separator`; thêm `aria-orientation="vertical"` cho Divider dọc.
- Nếu chỉ trang trí, không báo hiệu ranh giới logic: thêm `aria-hidden="true"`.
- Không nhận focus, không nằm trong thứ tự Tab — người dùng bàn phím di chuyển thẳng qua.
- Màu `#e4e4e7` là ranh giới phụ trợ; thông tin quan trọng phải có thêm tín hiệu khác (nhãn, khoảng cách, tiêu đề) ngoài đường kẻ.

## Flex — Kế thừa

Tiện ích bố cục linh hoạt theo trục, căn chỉnh và khoảng cách — xếp các phần tử con thành hàng hoặc cột với gap đều nhau mà không cần margin thủ công.

`import { Flex } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Nên dùng: xếp cụm nút, tag, icon thành hàng ngang có gap đều; dựng cột nội dung dọc (nhãn — trường nhập — chú thích); đẩy phần tử về hai đầu thanh (tiêu đề trái, hành động phải); cần phần tử tự xuống dòng khi không gian hẹp (wrap); căn giữa phần tử theo cả hai trục.
- KHÔNG dùng: bố cục lưới hai chiều có hàng và cột đối xứng — dùng Grid; bảng dữ liệu nhiều dòng nhiều cột — dùng Table; khoảng cách lẻ ngoài lưới 4px chỉ để "vừa mắt"; thay thế canh lề trang tổng thể — đó là việc của Layout.

**Nên / Không nên**
- Nên: dùng một giá trị `gap` duy nhất để tạo khoảng cách đều giữa các nút (gap từ thang 4/8/12/16/24/32px).
- Nên: dùng `justify="space-between"` để đẩy tiêu đề và trạng thái về hai đầu một cách tự nhiên.
- Nên: bật `wrap` cho hàng tag để chúng xuống dòng gọn gàng khi không gian hẹp.
- Không nên: gắn margin lẻ (vd 7px) lên từng phần tử con — phá lưới 4px và khó bảo trì.
- Không nên: căn `align="flex-end"` khi chiều cao các con khác nhau — khiến chúng lệch chân nhau, trông gãy hàng.
- Không nên: ép `nowrap` khiến tag bị cắt mất nội dung khi không đủ chỗ.

**Biến thể, kích thước & trạng thái**
- **Direction**: `row` (mặc định, ngang trái-phải) hoặc `column` (dọc trên-xuống).
- **Justify** (trục chính): `flex-start` (mặc định), `center`, `flex-end`, `space-between`.
- **Align** (trục phụ): `flex-start`, `center` (phổ biến nhất cho hàng cao thấp lẫn lộn), `stretch` (mặc định), `flex-end`.
- **Wrap**: `nowrap` (một dòng) hoặc `wrap` (tự xuống dòng; gap áp dụng cả chiều dọc).
- **Gap** (lưới 4px): XS=4px, SM=8px, MD=12px, LG=16px, XL=24px, 2XL=32px.
- Flex không có trạng thái tương tác — trạng thái nhìn thấy (mặc định, tràn/wrap, hai đầu, một con) đến từ cách bố cục phản ứng với nội dung và không gian.

**Design tokens**
- Gap XS: `4px` — khoảng cách dày đặc nhất (icon kèm nhãn, chip dày đặc).
- Gap SM: `8px` — cụm nút nhỏ, hàng tag, phần tử quan hệ chặt.
- Gap MD: `12px` — cụm nút tiêu chuẩn, hàng hành động trong card.
- Gap LG: `16px` — nhóm trường nhập, khối nội dung trong form.
- Gap XL: `24px` — tách các nhóm chức năng riêng biệt trong một thanh.
- Gap 2XL: `32px` — phân vùng lớn trên header trang hoặc dashboard.
- Direction mặc định: `row`; Align mặc định: `stretch`; Justify mặc định: `flex-start`.
- Flex không sở hữu token màu hay viền riêng — chỉ tiêu thụ token khoảng cách lưới 4px.

**Khả năng tiếp cận**
- Flex mặc định không cần `role`. Chỉ gắn role ngữ nghĩa khi nhóm con tạo thành đơn vị có ý nghĩa: `role="toolbar"` cho thanh công cụ, `role="group"` kèm `aria-label` cho cụm nút liên quan (vd "Hành động đơn hàng").
- Trình đọc màn hình và phím Tab đi theo thứ tự nguồn DOM, không theo vị trí trực quan — tránh đảo chiều thị giác làm lệch thứ tự đọc.
- Bản thân Flex không nhận focus; vòng focus hiển thị trên từng con tương tác được, gap đảm bảo các vòng focus không chồng lấn nhau.
- Trên thiết bị cảm ứng: gap tối thiểu 8px để các phần tử không chồng vùng nhấn của nhau.
- Khi đổi `direction` từ `row` sang `column` ở breakpoint nhỏ, kiểm tra lại `justify` và `align` — ý nghĩa của chúng hoán đổi giữa trục ngang và dọc.

## Grid (Row/Col) — Kế thừa

Hệ lưới 24 cột responsive cho bố cục trang, dựa trên hai thành phần `Row` (hàng) và `Col` (cột).

`import { Row, Col } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Nên dùng: bố cục trang quản trị (sidebar, nội dung chính, panel phụ); form nhiều cột; dashboard vận đơn với thẻ thống kê; bố cục cần co giãn khác nhau giữa điện thoại, máy tính bảng và desktop.
- KHÔNG dùng: căn chỉnh khoảng cách nhỏ bên trong nút hoặc thẻ — dùng spacing nội bộ của thành phần; danh sách có số phần tử thay đổi liên tục — cân nhắc lưới auto-fit; bố cục một cột đơn giản trên mobile — chỉ cần khối xếp dọc; đặt vị trí tuyệt đối cho phần tử nổi (overlay, tooltip).

**Nên / Không nên**
- Nên: giữ tổng span trong một hàng đúng bằng 24 để các cột vừa khít, không tràn dòng ngoài ý muốn.
- Nên: dùng gutter để tạo khoảng cách giữa các cột — đều đặn theo thang spacing 4-grid (4, 8, 12, 16, 24, 32).
- Nên: khai báo span cho các breakpoint quan trọng (xs, md, lg) để bố cục thích nghi mượt mà; mobile-first — khai báo bố cục nhỏ trước.
- Không: để tổng span vượt 24 (ví dụ 12 + 8 + 8 = 28) — cột cuối sẽ bị đẩy xuống dòng.
- Không: thêm margin thủ công trên từng cột để tạo khoảng cách — khoảng hở sẽ không đều, cột lệch khỏi mép lưới.
- Không: dùng cùng một span cố định cho mọi màn hình — cột ba phần trên desktop sẽ bị bóp quá hẹp trên điện thoại.
- Không: dùng gutter với giá trị lẻ như 10px hay 18px — chỉ dùng giá trị từ thang 4-grid.

**Biến thể, kích thước & trạng thái**
- Tỉ lệ span thông dụng: 24 (100%), 12 (50%), 8 (33.33%), 6 (25%), 4 (16.67%), 3 (12.5%).
- Gutter khít: 8px — lưới dày, bộ lọc, hàng dữ liệu gọn; Mặc định: 16px — form và bố cục trang phổ biến nhất; Thoáng: 24px — thẻ dashboard; Rộng: 32px — section lớn.
- Offset: đẩy cột sang phải bằng số phần trống, không cần cột giả.
- Trạng thái responsive: desktop — nhiều cột ngang; tablet — gập còn ít cột hơn; mobile — xếp dọc một cột.
- Canh lề hàng: hỗ trợ `justify` (start/center/end/space-between/space-around) và `align` (top/middle/bottom/stretch).
- Sáu breakpoint: `xs < 576px`, `sm ≥ 576px`, `md ≥ 768px`, `lg ≥ 992px`, `xl ≥ 1200px`, `xxl ≥ 1600px`.

**Design tokens**
- Gutter khít: `8px` | Gutter mặc định: `16px` | Gutter thoáng: `24px` | Gutter rộng: `32px`
- Bán kính khối nội dung: `8px`
- Màu nền nhấn: `var(--ghn-primary)` (`#ff5200`) | Màu chữ trên nhấn: `var(--ghn-on-primary)` (`#fff`)
- Màu viền: `var(--ghn-border)` (`#d4d4d8`) | Nền phụ: `var(--ghn-soft)` (`#fafafa`)
- Lưới không dùng token pixel cố định cho chiều rộng cột — tính theo tỉ lệ phần trăm của 24 phần.

**Khả năng tiếp cận**
- Thứ tự DOM phải khớp thứ tự đọc; tránh đảo thứ tự hiển thị bằng push/pull vì trình đọc màn hình đọc theo DOM.
- Không truyền nghĩa chỉ qua vị trí (trái/phải) — trên mobile các cột sẽ xếp dọc.
- Mỗi vùng bố cục (sidebar, nội dung chính) nên có `role="region"` và `aria-label` để người dùng trình đọc màn hình điều hướng nhanh.
- Chữ trên nền cam `#ff5200` dùng màu chữ `#fff` (on-primary) đạt tỉ lệ tương phản tối thiểu; chữ thường dùng `#09090b` trên nền sáng.
- Điều hướng bàn phím bằng `Tab` / `Shift+Tab` theo thứ tự DOM — lưới không bẫy focus.
- Khi zoom tới 200%, cột tự gập về ít cột hơn thay vì cuộn ngang.
- Thay đổi span giữa breakpoint diễn ra tức thì khi resize — không thêm transition cho việc gập cột để tránh giật khi xoay màn hình.

## Layout — Kế thừa

Khung bố cục trang gồm bốn vùng có vai trò cố định: Header, Sider, Content và Footer — tổ chức không gian giao diện nhất quán trên toàn hệ thống GHN.

`import { Layout } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi dựng khung tổng thể cho trang ứng dụng có điều hướng dọc và thanh trên cùng (dashboard, quản lý đơn hàng).
- Dùng khi cần bộ khung nhất quán tái sử dụng trên nhiều trang, hoặc muốn vùng điều hướng cố định trong khi vùng nội dung cuộn độc lập.
- Dùng khi cần hỗ trợ thu gọn điều hướng để mở rộng không gian làm việc.
- **Không dùng** để chia lưới nội dung bên trong thẻ hoặc khối nhỏ — dùng Grid thay thế.
- **Không dùng** cho trang landing tĩnh không có điều hướng dọc.
- **Không dùng** để sắp xếp phần tử nội bộ của một component (ví dụ bên trong Card).
- **Không dùng** để tạo nhiều thanh điều hướng dọc song song gây rối hướng nhìn.

**Nên / Không nên**
- Nên: giữ một Sider duy nhất, đánh dấu mục đang chọn bằng nền `soft #fff2e6` + chữ `primary #ff5200`.
- Không nên: dùng hai Sider song song hoặc đánh dấu nhiều mục cùng "đang chọn".
- Nên: dùng khoảng cách theo lưới 4px — padding Content 24px, gap Header 16px.
- Không nên: đặt khoảng cách tùy tiện như 18px hay 30px phá vỡ nhịp lưới.
- Nên: cho phép Content cuộn độc lập trong khi Header và Sider giữ cố định.
- Không nên: để toàn trang cuộn khiến Header trôi mất, buộc người dùng cuộn ngược lên để điều hướng.
- Trên màn hình hẹp, luôn cung cấp nút menu rõ ràng trong Header để mở điều hướng — đừng giả định người dùng biết vuốt từ cạnh màn hình.

**Biến thể, kích thước & trạng thái**
- **Sider bên trái (mặc định):** Header trải ngang toàn bộ, Sider dưới Header bên trái; dùng cho phần lớn ứng dụng quản lý GHN.
- **Header và Sider liền góc:** Header chứa logo + tác vụ toàn cục, Sider chỉ phụ trách điều hướng nội bộ; hợp với sản phẩm có Header đậm thương hiệu.
- **Không có Sider:** chỉ Header + Content + Footer, điều hướng nằm ngang trong Header; dùng khi số mục ít và nội dung cần toàn bộ chiều rộng.
- **Sider thu gọn:** mở rộng 160–200px (icon + nhãn) / thu gọn 56px (chỉ icon, nhãn hiện qua tooltip). Mục đang chọn vẫn giữ nền `soft` khi thu gọn.
- Kích thước chuẩn: Header cao 56px (48px mật độ cao), Sider mở 200px, Sider thu 56px, Content padding 24px, Footer cao 40–64px, mục menu cao 36–40px.
- Trạng thái mục Sider: Mặc định → Hover (nền `bg-subtle`) → Đang chọn (nền `soft`, chữ `primary`) → Vô hiệu (opacity 0.6) → Focus bàn phím (outline `primary`).
- Responsive: ≥ 1200px Sider mở rộng; 768–1199px Sider tự thu gọn dạng icon; < 768px Sider ẩn hoàn toàn, mở qua drawer.

**Design tokens**
- `var(--ghn-white)` — nền Content và Header
- `var(--ghn-bg-subtle)` — nền Sider, Footer; nền mục hover
- `var(--ghn-border)` — đường phân tách giữa các vùng
- `var(--ghn-soft)` — nền mục menu đang chọn (`#fff2e6`)
- `var(--ghn-primary)` — chữ/icon mục chọn, vòng focus (`#ff5200`)
- `var(--ghn-text)` — chữ mục menu mặc định (`#09090b`)
- `var(--ghn-muted)` — chữ phụ Footer (`#52525b`)
- Kích thước không phải CSS custom property nhưng tuân lưới 4px: Header 56px, Sider mở 200px, Sider thu 56px, Content padding 24px.

**Khả năng tiếp cận**
- Khai báo landmark rõ ràng: `role="banner"` (Header), `role="navigation"` (Sider), `role="main"` (Content), `role="contentinfo"` (Footer).
- Sider có `aria-label="Điều hướng chính"`; nút thu gọn có nhãn động "Mở rộng"/"Thu gọn" và `aria-expanded`.
- Mục đang chọn dùng `aria-current="page"`.
- Bàn phím: Tab/Shift+Tab di chuyển tuần tự qua các vùng; ↑/↓ trong Sider; Enter kích hoạt; Esc đóng drawer và trả focus về nút mở.
- Cung cấp skip link "Bỏ qua tới nội dung" hiện khi focus đầu trang.
- Vùng chạm mục menu tối thiểu 36–44px chiều cao.
- Tôn trọng `prefers-reduced-motion`: tắt hiệu ứng trượt khi người dùng bật "reduce motion".
- Tương phản đạt WCAG AA: chữ `text #09090b` trên `bg-subtle #fafafa`; chữ `primary #ff5200` trên `soft #fff2e6`.

## Space — Kế thừa

Component bố cục chèn khoảng cách đều và nhất quán giữa các phần tử liền kề, thay cho việc canh chỉnh margin thủ công.

`import { Space } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Nên dùng: đặt khoảng cách cho nhóm nút thao tác cuối form hoặc trên thanh công cụ.
- Nên dùng: xếp dãy tag trạng thái đơn hàng, nhãn dịch vụ liền nhau.
- Nên dùng: gom các điều khiển nhỏ như Select, Input, nút Lọc trên một hàng.
- Nên dùng: xếp chồng dọc vài khối thông tin ngắn với khoảng cách đồng nhất.
- KHÔNG dùng: dựng bố cục trang nhiều cột, vùng nội dung lớn — dùng Grid.
- KHÔNG dùng: phân tách hai khối nội dung bằng đường kẻ — dùng Divider.
- KHÔNG dùng: căn chỉnh phức tạp cần đổi tỉ lệ co giãn từng phần tử — dùng Flex.
- KHÔNG dùng: tạo khoảng cách cho danh sách dài có cuộn — dùng List.

**Nên / Không nên**
- Nên: dùng một mức khoảng cách thống nhất cho cả cụm để tạo nhịp điệu đều.
- Không nên: chèn margin thủ công khác nhau giữa các phần tử, phá vỡ lưới spacing.
- Nên: bật ngắt dòng (wrap) cho dãy chip có số lượng thay đổi để tránh tràn ngang.
- Không nên: để dãy chip dài tràn ra ngoài khung mà không cho ngắt dòng hay cuộn.
- Nên: dùng Space cho cụm nhỏ vài phần tử liên quan trên cùng một hàng hoặc cột.
- Không nên: lạm dụng Space lồng nhiều lớp để dựng bố cục trang lớn thay cho Grid.

**Biến thể, kích thước & trạng thái**
- Hướng ngang (mặc định): phần tử xếp trên cùng một hàng, cách đều theo chiều ngang.
- Hướng dọc: phần tử xếp chồng lên nhau, cách đều theo chiều dọc.
- Tự ngắt dòng (wrap): khi hết chỗ ngang, phần tử xuống dòng và vẫn giữ khoảng cách đều cả hai trục — phù hợp cho dãy chip lọc có số lượng thay đổi.
- Có dải phân cách: chèn đường mảnh giữa các phần tử để phân nhóm thao tác; dải phân cách cần `aria-hidden`.
- Kích thước Small — 8px: cụm phần tử gắn kết chặt, nhóm tag, chip lọc.
- Kích thước Middle — 16px (mặc định): nhóm nút thao tác, cụm điều khiển thông thường.
- Kích thước Large — 24px: tách các khối nội dung độc lập cần thở rộng hơn theo cột.
- Khi cần giá trị khác, chọn bậc hợp lệ của lưới 4-grid (4, 12, 32, 48…), không nhập số tùy ý.
- Space không mang trạng thái tương tác; trạng thái thể hiện qua các phần tử con bên trong.

**Design tokens**
- `spacing.xs` — 4px: khoảng cách tối thiểu cho cụm phần tử rất gắn kết.
- `spacing.sm` — 8px: khoảng cách Small — nhóm tag, chip lọc.
- `spacing.md` — 12px: bậc trung gian giữa Small và mặc định.
- `spacing.lg` — 16px: khoảng cách Middle (mặc định) — nhóm nút và cụm điều khiển.
- `spacing.xl` — 24px: khoảng cách Large — tách các khối nội dung độc lập.
- `spacing.2xl` — 32px: khoảng cách rộng cho cụm khối lớn theo cột.
- `color.border` — #d4d4d8: màu dải phân cách mảnh chèn giữa các phần tử.

**Khả năng tiếp cận**
- Vùng bao bọc trong suốt với trình đọc màn hình; không gắn role không cần thiết.
- Sắp xếp phần tử con trong DOM đúng thứ tự thị giác để Tab và trình đọc màn hình đi theo trật tự hợp lý.
- Mỗi nút, chip, control tự chịu trách nhiệm về aria-label của mình; Space không bù đắp cho nhãn thiếu.
- Dùng khoảng cách đủ rộng để vùng chạm không chồng lấn trên màn hình cảm ứng.
- Khoảng trống do Space tạo ra không được che khuất vòng focus của phần tử con.
- Dải phân cách là yếu tố trang trí — ẩn khỏi trình đọc màn hình bằng `aria-hidden`.

## Splitter — Kế thừa

Chia vùng thành các ô kéo giãn được; người dùng tự điều chỉnh tỉ lệ giữa các panel bằng cách kéo thanh phân cách.

`import { Splitter } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng cho bố cục hai hoặc nhiều cột cần điều chỉnh tỉ lệ (ví dụ danh sách đơn + chi tiết đơn, bản đồ + bảng điều phối, soạn thảo + xem trước).
- Dùng khi vùng làm việc đủ rộng (desktop) và người dùng dành nhiều thời gian muốn cá nhân hóa bố cục.
- KHÔNG dùng khi tỉ lệ bố cục cố định — dùng lưới hoặc cột tĩnh thay thế.
- KHÔNG dùng trên màn hình hẹp (mobile) vì chia cột làm mỗi vùng quá nhỏ — ưu tiên xếp dọc hoặc tab.
- KHÔNG dùng để phân tách các bước quy trình tuyến tính — dùng Steps hoặc Tabs.
- KHÔNG dùng khi chỉ cần ngăn cách thị giác đơn thuần — dùng Divider thay vì thanh kéo tương tác.

**Nên / Không nên**

- Nên: Hiển thị tay nắm ở giữa thanh kéo để gợi ý rõ rằng thanh có thể kéo được.
- Không nên: Để thanh kéo mỏng như một đường kẻ, không có tay nắm và vùng chạm khiến người dùng khó nhận ra.
- Nên: Đặt kích thước tối thiểu cho mỗi panel (~12%) để nội dung quan trọng luôn còn hiển thị.
- Không nên: Cho phép kéo một panel co về gần như biến mất, làm nội dung bị cắt cụt.
- Nên: Lưu tỉ lệ người dùng đã chọn vào bộ nhớ phiên để lần sau khôi phục đúng.
- Không nên: Lạm dụng nhiều thanh kéo lồng nhau làm bố cục rối — giới hạn số panel ở mức thực sự cần.

**Biến thể, kích thước & trạng thái**

- Biến thể: chia ngang (separator dọc, phổ biến nhất); chia dọc (separator ngang, dùng cho trên/dưới); nhiều panel (3+ panel với nhiều thanh kéo); kèm nút thu gọn nhanh.
- Kích thước: độ dày thanh kéo `8px`; vùng chạm tối thiểu `24px`; tay nắm `2px × 32px`; kích thước panel tối thiểu gợi ý `12%`; bo góc vùng chứa `8px`.
- Trạng thái: Mặc định → Hover (nền `#ff5200`) → Đang kéo / Active (nền `#d4490b`) → Focus bàn phím (viền `#006fad`) → Disabled (opacity 0.6, con trỏ not-allowed).

**Design tokens**

- `var(--ghn-border)` — nền thanh kéo mặc định (`#d4d4d8`), viền vùng chứa
- `var(--ghn-primary)` — nền thanh kéo khi hover (`#ff5200`)
- `var(--ghn-primary-active)` — nền thanh kéo khi đang kéo (`#d4490b`)
- `var(--ghn-placeholder)` — màu tay nắm (`#71717a`)
- `var(--ghn-info)` — viền focus (`#006fad`)
- `var(--ghn-bg-subtle)` — nền panel phụ (`#fafafa`)
- `var(--ghn-white)` — nền vùng chứa chính (`#ffffff`)

**Khả năng tiếp cận**

- Thanh kéo dùng `role="separator"` kèm `aria-orientation` (`vertical` hoặc `horizontal`).
- Khai báo `aria-valuenow`, `aria-valuemin`, `aria-valuemax` để trình đọc màn hình đọc được tỉ lệ hiện tại.
- Thanh kéo nằm trong thứ tự Tab với `tabindex="0"`, hỗ trợ phím `←` `→` `↑` `↓` chỉnh từng bước, `Home`/`End` về giới hạn, `Enter` thu gọn/khôi phục.
- Gắn `aria-label` mô tả cụ thể, ví dụ "Điều chỉnh độ rộng danh sách đơn".
- Viền focus `#006fad` đạt tương phản tối thiểu trên nền sáng; hover `#ff5200` phân biệt rõ với focus.
- Vùng chạm tối thiểu `24px` hỗ trợ người dùng vận động hạn chế.


# Điều hướng

## Affix — Kế thừa

Ghim một phần tử ở vị trí cố định trên màn hình khi người dùng cuộn trang.

`import { Affix } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng khi một điều khiển phụ cần luôn truy cập được trong lúc xem nội dung dài.
- Dùng để ghim thanh công cụ / bộ lọc khi cuộn bảng dài.
- Dùng để ghim mục lục bên cạnh nội dung dài.
- KHÔNG dùng để ghim điều hướng chính của trang — hãy dùng Layout header sticky.
- KHÔNG dùng trên trang ngắn (không cần thiết).

**Nên / Không nên**

- Nên: Đặt ngưỡng (`offsetTop` / `offsetBottom`) hợp lý để không che nội dung.
- Không nên: Ghim quá nhiều phần tử gây rối và chiếm không gian.
- Không nên: Ghim điều hướng chính — dùng Layout header sticky thay thế.
- Không nên: Dùng trên trang ngắn không cần cuộn.

**Biến thể, kích thước & trạng thái**

- Ghim trên (`offsetTop`): dính vào cạnh trên khi cuộn xuống.
- Ghim dưới (`offsetBottom`): dính vào cạnh dưới khi cuộn lên.
- Trạng thái "Trong luồng": phần tử ở vị trí bình thường trong layout.
- Trạng thái "Đã ghim": phần tử chuyển sang `position: fixed`, thêm đổ bóng nhẹ để tách lớp.

**Hành vi**

Affix theo dõi vị trí cuộn và chuyển phần tử sang `position: fixed` khi vượt ngưỡng, trả về vị trí cũ khi cuộn ngược lại. Tôn trọng `prefers-reduced-motion` (không hiệu ứng giật).

**Design tokens**

- `--ghn-z-sticky` (1010) — z-index lớp phần tử ghim.
- `--doc-soft-shadow` — đổ bóng nhẹ khi phần tử đang ở trạng thái cố định.
- `--ghn-duration-fast` — thời lượng chuyển động khi đổi trạng thái.

**Khả năng tiếp cận**

Phần tử ghim không được che mất tiêu điểm bàn phím; đảm bảo nội dung phía sau vẫn cuộn và đọc được. Không bẫy focus trong vùng ghim.

## Anchor — Kế thừa

Danh sách liên kết neo giúp người dùng nhảy nhanh đến từng phần trong một trang dài và biết mình đang đọc ở đâu (scrollspy hai chiều).

```js
import { Anchor } from 'antd';
```

**Khi nào dùng / KHÔNG dùng**
- Dùng: trang tài liệu/hướng dẫn dài nhiều phần, trang điều khoản/chính sách nhiều mục, trang chi tiết đơn hàng phức tạp, trang cài đặt nhiều nhóm thiết lập.
- KHÔNG dùng: trang ngắn vừa một màn hình (không cần cuộn), khi chỉ có một hoặc hai phần nội dung, để điều hướng giữa các trang khác nhau (dùng menu/breadcrumb thay thế), trên màn hình hẹp khi không có không gian đặt cột bên.

**Nên / Không nên**
- Nên: dùng nhãn ngắn gọn, trùng khớp với tiêu đề của phần nội dung tương ứng.
- Nên: giới hạn số mục ở mức quét nhanh được, gộp các phần nhỏ và hạn chế tối đa hai cấp.
- Nên: luôn highlight đúng một mục phản ánh vị trí cuộn hiện tại của người dùng.
- Không nên: đặt nhãn dài, khác hẳn tiêu đề thật khiến người dùng khó đối chiếu.
- Không nên: liệt kê quá nhiều mục hoặc lồng quá ba cấp khiến danh sách rối và khó dùng.
- Không nên: để nhiều mục cùng active một lúc, hoặc không mục nào active khi đang ở giữa trang.

**Biến thể, kích thước & trạng thái**
- Biến thể dọc (mặc định): danh sách xếp dọc, đặt ở cột bên, cố định (sticky) khi cuộn — phù hợp desktop.
- Biến thể ngang: danh sách xếp ngang, thanh nhấn ở cạnh dưới — dùng khi không có cột bên hoặc trên màn hình hẹp.
- Phân cấp nhiều cấp: mục con thụt vào 16px, font-size 13px — giới hạn tối đa hai cấp.
- Trạng thái mặc định: chữ muted (#52525b), không có thanh nhấn.
- Trạng thái hover: chữ chuyển sang màu text đậm (#09090b).
- Trạng thái active: chữ cam (#ff5200), đậm (font-weight 600), có thanh nhấn dọc 2px bên trái.
- Trạng thái focus: viền nét bàn phím (focus ring) màu chủ đạo, bo góc 8px.
- Trạng thái disabled: mờ, không tương tác.

**Design tokens**
- Màu active (chữ + thanh nhấn): `#ff5200` (var(--ghn-primary))
- Màu hover thanh nhấn: `#ff7429`
- Màu chữ mục thường (muted): `#52525b` (var(--ghn-muted))
- Màu chữ hover: `#09090b` (var(--ghn-text))
- Màu đường kẻ định hướng: `#d4d4d8` (var(--ghn-border))
- Màu chữ disabled: `#71717a` (var(--ghn-placeholder))
- Độ rộng thanh nhấn: `2px`; đệm dọc mỗi mục: `6px`; đệm ngang: `12px`; thụt mục con: `16px`
- Cỡ chữ mục chính: `14px`; mục con: `13px`; độ rộng cột tối thiểu: `160px`
- Bo góc viền nét focus: `8px`; font: Inter; letter-spacing: `0.1px`

**Khả năng tiếp cận**
- Bọc danh sách Anchor trong `<nav>` với `aria-label` rõ ràng (ví dụ: "Mục lục" hoặc "Trong trang này").
- Mục đang active phải có thuộc tính `aria-current` để trình đọc màn hình nhận biết vị trí hiện tại.
- Toàn bộ mục phải tiếp cận và kích hoạt được bằng `Tab` và `Enter`; không bẫy tiêu điểm bên trong Anchor.
- Mỗi mục là liên kết thực với văn bản có nghĩa — không dùng văn bản chung chung như "tại đây".
- Chữ active (#ff5200) và chữ muted (#52525b) phải đạt tỷ lệ tương phản tối thiểu theo WCAG.
- Viền nét focus phải nhìn thấy rõ và không bị thanh nhấn active che khuất.
- Tôn trọng `prefers-reduced-motion`: nếu người dùng bật giảm chuyển động thì cuộn tức thời, không hiệu ứng smooth scroll.

## BackTop — Kế thừa

Nút nổi giúp người dùng cuộn nhanh về đầu trang sau khi đã cuộn xuống đủ xa.

`import { BackTop } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng cho trang nội dung dài cần cuộn nhiều (danh sách đơn hàng, blog, tài liệu).
- KHÔNG dùng trên trang ngắn không cần cuộn.
- KHÔNG để nút luôn hiển thị kể cả khi ở đầu trang — chỉ hiện sau khi cuộn vượt ngưỡng (ví dụ 400px).
- KHÔNG đặt chồng lên FloatButton hay nút hành động nổi cùng vị trí.

**Nên / Không nên**
- Nên: đặt góc dưới phải, không che hành động chính.
- Nên: hiện sau khi cuộn quá một ngưỡng cụ thể.
- Không nên: che mất nút FloatButton cùng vị trí.
- Không nên: luôn hiển thị kể cả khi người dùng đang ở đầu trang.

**Biến thể, kích thước & trạng thái**
- Mặc định: nút tròn 44px, icon mũi tên lên, nền trắng, border nhẹ, đổ bóng.
- Tuỳ biến: có thể thêm nhãn văn bản bên cạnh icon (ví dụ: icon + "Lên đầu").
- Trạng thái ẩn: khi ở gần đầu trang (opacity thấp / không hiển thị).
- Trạng thái hiện: sau khi cuộn xuống đủ xa, nút xuất hiện bằng hiệu ứng mờ dần.

**Design tokens**
- `--ghn-z-fixed` (1020) — lớp z-index cho nút nổi
- `--ghn-r-pill` — bo góc tròn hoàn toàn
- `--doc-knob-shadow` — đổ bóng để nút nổi khỏi nền
- `--ghn-duration-base` — thời lượng hiệu ứng hiện/ẩn mượt

**Khả năng tiếp cận**
- Nút chỉ-icon bắt buộc có `aria-label="Về đầu trang"`.
- Có thể kích hoạt bằng bàn phím (`Enter` / `Space`); cần có trạng thái `:focus-visible` rõ ràng.
- Sau khi cuộn về đầu, chuyển tiêu điểm tới đầu nội dung chính.
- Tôn trọng `prefers-reduced-motion`: cuộn tức thời (không animation) nếu người dùng yêu cầu giảm chuyển động.

## Breadcrumb — Kế thừa

Dải điều hướng phụ thể hiện vị trí hiện tại trong cấu trúc phân cấp và cung cấp lối tắt quay lại các cấp cha.

`import { Breadcrumb } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: trang nằm sâu từ 2 cấp trở lên trong cây phân cấp (ví dụ: Trang chủ › Kho › Kho Hà Nội › Cấu hình).
- Dùng: khi người dùng cần nhanh chóng quay về cấp cha bất kỳ mà không lần ngược qua nhiều màn hình.
- Dùng: hệ thống quản trị nhiều tầng — danh mục đơn hàng, cấu hình tài khoản, phân quyền theo phòng ban.
- Dùng: trang chi tiết được mở từ danh sách, cần đường về danh sách cha.
- KHÔNG dùng: trang ở cấp gốc hoặc cấu trúc chỉ có 1 cấp — không có cấp cha để hiển thị.
- KHÔNG dùng: quy trình tuần tự nhiều bước (tạo đơn, thanh toán) — hãy dùng Steps thay vì Breadcrumb.
- KHÔNG dùng: thay thế menu/sidebar làm điều hướng chính của ứng dụng.
- KHÔNG dùng: thay thế nút "Quay lại" của một luồng tác vụ đơn lẻ.

**Nên / Không nên**
- Nên: để mục cuối cùng là trang hiện tại — màu muted, không bấm được (`aria-current="page"`).
- Nên: thu gọn các cấp giữa bằng nút `…` khi đường dẫn quá 4–5 cấp; luôn giữ cấp gốc và 1–2 cấp cuối.
- Nên: dùng nhãn ngắn gọn, đúng tên trang trong cây phân cấp thật.
- Nên: dùng icon nhất quán — hoặc tất cả các mục có icon, hoặc chỉ mục gốc có icon.
- Không: để mục cuối là liên kết bấm được — người dùng đang ở chính trang đó.
- Không: để chuỗi quá dài tràn dòng, che mất tiêu đề trang — hãy thu gọn.
- Không: đặt nhãn theo lịch sử bấm chuột ("Trước đó", "Quay lại") — Breadcrumb phản ánh cấu trúc, không phải hành trình.
- Không: phóng to/thu nhỏ cỡ chữ tùy ý — GHN chỉ dùng một cỡ Breadcrumb.

**Biến thể, kích thước & trạng thái**
- Biến thể separator: chevron `›` (mặc định, tạo cảm giác "đi tới") hoặc dấu gạch chéo `/` (gọn hơn khi mật độ cao).
- Biến thể icon: có icon kèm nhãn tại từng mục (nên dùng nhất quán).
- Biến thể thu gọn: đường dẫn dài gộp các cấp giữa vào nút `…`; bấm bung ra danh sách các cấp ẩn.
- Biến thể dropdown: một cấp có thể kèm `˅` để chuyển nhanh sang các mục ngang hàng.
- Kích thước: cỡ chữ 14px, chiều cao dòng 22px, khoảng cách quanh separator 8px, chevron 11px, icon–nhãn 6px, cách tiêu đề bên dưới 16px.
- Trạng thái liên kết: mặc định (màu link `#006fad`, không gạch chân) → hover (gạch chân) → active (cam `#ff5200`) → focus (outline 2px cam, cách 2px).
- Trang hiện tại: màu muted `#52525b`, không bấm, không hover.
- Vô hiệu: màu placeholder `#71717a`, con trỏ `not-allowed`.

**Design tokens**
- Màu chữ liên kết: `#006fad` (var(--ghn-link))
- Màu chữ active: `#ff5200` (var(--ghn-primary))
- Màu chữ trang hiện tại: `#52525b` (var(--ghn-muted))
- Màu chữ vô hiệu: `#71717a` (var(--ghn-placeholder))
- Màu separator: `#d4d4d8` (var(--ghn-border))
- Nền nút thu gọn: `#fafafa` (var(--ghn-bg-subtle)), bo góc 8px
- Viền focus: `#ff5200`, outline 2px, offset 2px
- Cỡ chữ: 14px, font Inter, letter-spacing .1px

**Khả năng tiếp cận**
- Bọc Breadcrumb trong `<nav aria-label="Đường dẫn phân cấp">` để trình đọc màn hình phân biệt với các vùng nav khác.
- Mục cuối gắn `aria-current="page"` và không phải liên kết.
- Trình bày các mục dưới dạng danh sách có thứ tự (`<ol>`) để công nghệ hỗ trợ đọc đúng số lượng cấp.
- Separator đặt `aria-hidden="true"` để không bị đọc thành "lớn hơn" hay "gạch chéo".
- Mọi liên kết tới được bằng `Tab`, kích hoạt bằng `Enter`; nút thu gọn mở bằng `Enter` hoặc `Space`.
- Nút thu gọn `…` cần nhãn rõ ràng: `aria-label="Hiển thị các cấp ẩn"`.
- Tương phản: link `#006fad` và muted `#52525b` trên nền trắng đều đạt ≥ 4.5:1; hover bổ sung gạch chân (không dùng riêng màu để truyền đạt trạng thái).

## Dropdown / Context menu — Ổn định

Danh sách hành động hiện từ một điểm kích hoạt; dùng để gom các thao tác phụ mà không chiếm diện tích giao diện.

`import { Dropdown } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Nên dùng: menu hành động trên từng dòng bảng đơn hàng (sửa, sao chép, in, xoá); gom thao tác phụ ít dùng; trình đơn ngữ cảnh chuột phải vào đơn/kiện hàng; menu chọn nhanh không lưu giá trị (sắp xếp, xuất file).
- KHÔNG dùng: chọn giá trị để lưu vào biểu mẫu — dùng Select; chỉ có một hành động duy nhất — đặt thẳng nút bấm; lựa chọn cần so sánh và hiển thị thường trực — dùng Radio hoặc Tab; hơn 10–12 mục hoặc cần tìm kiếm — dùng panel/trang riêng.

**Nên / Không nên**
- Nên: đặt hành động phá huỷ xuống cuối, sau đường phân cách, tô màu cảnh báo `#ff4d4f`.
- Nên: dùng động từ đứng đầu nhãn và biểu tượng mô tả đúng thao tác để người dùng quét nhanh.
- Nên: giữ menu ngắn (dưới 7–8 mục), gom mục liên quan để người dùng quyết định nhanh.
- Không nên: để hành động xoá ở đầu menu cạnh các mục thường — dễ gây nhấn nhầm.
- Không nên: dùng nhãn danh từ mơ hồ, icon không liên quan hay câu chữ dài.
- Không nên: nhồi hàng chục mục vào một menu — khó quét, dễ chọn nhầm.

**Biến thể, kích thước & trạng thái**
- Biến thể trigger: nút primary (hành động khởi tạo nổi bật), nút outline (mặc định), trigger biểu tượng overflow `···` (dòng bảng), trigger văn bản kèm giá trị hiện tại, context menu (chuột phải).
- Kích thước: chiều cao mỗi mục 36px; đệm dọc 8px, đệm ngang 12px; khoảng cách icon–nhãn 8px; bề rộng tối thiểu panel 160px; bo góc panel 8px; khoảng cách trigger–panel 8px; cỡ chữ 14px Inter.
- Trạng thái mục: mặc định (nền trắng, chữ `#09090b`), hover (nền `#fff2e6`), focus bàn phím (viền `#ff5200`), đã chọn (kèm icon check màu `#ff5200`), vô hiệu hoá (mờ opacity 0.4), phá huỷ hover (chữ và nền `#ff4d4f` nhạt).
- Panel mở/đóng: mờ dần + trượt nhẹ 4px trong 150–200ms; đóng nhanh hơn ~100ms; tự lật khi sát mép màn hình; tôn trọng prefers-reduced-motion.

**Design tokens**
- Nền panel: `#fff`
- Chữ mục mặc định: `#09090b`
- Chữ phụ / nhãn nhóm: `#52525b`
- Nền hover mục: `#fff2e6`
- Viền focus bàn phím: `#ff5200`
- Dấu chọn (icon check): `#ff5200`
- Chữ & icon phá huỷ: `#ff4d4f`
- Đường phân cách: `#d4d4d8`
- Bo góc panel: `8px`
- Bóng đổ panel: `shadow-md`
- Đệm dọc mục: `8px` trên/dưới
- Đệm ngang mục: `12px` trái/phải
- Khoảng cách trigger–panel: `8px`
- Phông chữ: Inter, letter-spacing 0.1px

**Khả năng tiếp cận**
- Panel mang `role="menu"`, mỗi mục `role="menuitem"`, đường phân cách `role="separator"`.
- Trigger cần `aria-haspopup="menu"` và `aria-expanded` phản ánh trạng thái mở/đóng.
- Trigger chỉ có icon (ví dụ `···`) phải có `aria-label` rõ ràng, ví dụ "Thao tác đơn hàng".
- Hỗ trợ bàn phím: `Enter`/`Space` mở menu; `↓`/`↑` di chuyển focus (vòng tròn); `Enter` kích hoạt; `Esc` đóng và trả focus về trigger; `→`/`←` mở/đóng menu con.
- Mục đã chọn đánh dấu bằng `aria-checked` hoặc `aria-current`, không chỉ dựa vào icon.
- Hành động phá huỷ cần có cả biểu tượng lẫn nhãn rõ ràng — không chỉ tô đỏ để truyền tải ý nghĩa.
- Vùng chạm tối thiểu 36px chiều cao để dễ thao tác trên cảm ứng.

## Menu — Ổn định

Điều hướng chính dọc/ngang, có hỗ trợ cấp con; dùng làm sidebar quản trị hoặc menu hành động (dropdown, ngữ cảnh).

`import { Menu } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: điều hướng chính dạng sidebar trong trang quản trị, dashboard.
- Dùng: menu hành động bật ra từ nút hoặc icon ba chấm (sửa, sao chép, xoá).
- Dùng: menu ngữ cảnh gắn với một dòng dữ liệu trong bảng hoặc danh sách.
- Dùng: nhóm liên kết có quan hệ phân cấp tự nhiên với một cấp con.
- KHÔNG dùng để chọn một giá trị từ tập hữu hạn trong biểu mẫu — dùng Select.
- KHÔNG dùng cho điều hướng ngang ở đầu trang — dùng thanh điều hướng hoặc Tabs.
- KHÔNG dùng để bật/tắt nhiều tuỳ chọn cùng lúc — dùng Checkbox hoặc nhóm Switch.
- KHÔNG dùng khi có quá nhiều mục phẳng không nhóm (trên ~12 mục) — cân nhắc tìm kiếm hoặc phân nhóm sâu hơn.

**Nên / Không nên**
- Nên: mỗi mục một icon nhất quán, chỉ một mục đang chọn trong nhóm tại một thời điểm.
- Nên: tách hành động phá huỷ (xoá) xuống dưới đường phân cách và tô màu lỗi `#ff4d4f`.
- Nên: lồng tối đa hai cấp, mục con thụt lề rõ ràng.
- Không nên: đánh dấu nhiều mục cùng chọn hoặc icon lúc có lúc không — gây rối loạn thị giác.
- Không nên: đặt mục xoá lẫn lộn lên đầu menu — người dùng dễ bấm nhầm.
- Không nên: lồng ba cấp trở lên — người dùng sẽ mất phương hướng trong cấu trúc.
- Không nên: dùng màu chủ đạo ngoài mục đang chọn và hành động nguy hiểm — điểm nhấn sẽ bị loãng.

**Biến thể, kích thước & trạng thái**
- Biến thể: Menu điều hướng (sidebar), Menu hành động (dropdown), Menu ngữ cảnh, Menu có submenu.
- Kích thước mặc định: chiều cao mục `40px`, đệm ngang `12px`, icon `16px`.
- Kích thước nhỏ: chiều cao mục `32px`, đệm ngang `8px`, icon `14px` — dùng cho menu ngữ cảnh trong bảng dày hoặc không gian hẹp.
- Trạng thái: Mặc định, Hover (`#fafafa`), Đang chọn (`#fff2e6` + gạch trái `#ff5200`), Focus bàn phím (viền `#ff5200`), Vô hiệu (mờ, không nhận tương tác), Nguy hiểm (nhãn/icon `#ff4d4f`).
- Khi thu gọn chỉ-icon (sidebar collapsed): nhãn ẩn, hiện qua tooltip khi hover.

**Design tokens**
- Nền vùng chứa: `#fff`
- Nền mục đang chọn: `#fff2e6`
- Dải gạch chọn / vòng focus: `#ff5200` (rộng `3px`, nằm sát mép trái)
- Nền hover: `#fafafa`
- Nhãn thường: `#09090b`
- Icon dẫn dắt / văn bản phụ: `#52525b`
- Màu nguy hiểm: `#ff4d4f`
- Viền / đường phân cách: `#d4d4d8`
- Bo góc vùng chứa: `8px`
- Khoảng cách icon–nhãn: `8px`
- Phông chữ: Inter, letter-spacing `0.1px`

**Khả năng tiếp cận**
- Vùng chứa dùng `role="menu"` (menu hành động) hoặc danh sách điều hướng có `aria-label` rõ ràng.
- Mỗi mục dùng `role="menuitem"`; mục có submenu thêm `aria-haspopup="true"` và `aria-expanded`.
- Mục điều hướng hiện hành mang `aria-current="page"`.
- Mục vô hiệu dùng `aria-disabled="true"` (không chỉ làm mờ thị giác).
- Đường phân cách dùng `role="separator"`.
- Mục chỉ-icon (sidebar thu gọn) phải có nhãn văn bản ẩn cho trình đọc màn hình.
- Icon trang trí dùng `aria-hidden="true"`.
- Điều hướng bàn phím: `Tab` vào/ra menu; `↑↓` di chuyển giữa các mục; `→` mở submenu; `←` đóng submenu về mục cha; `Enter`/`Space` kích hoạt; `Esc` đóng menu và trả focus về nút kích hoạt.
- Khi dropdown mở, focus tự động chuyển vào mục đầu tiên (hoặc mục đang chọn); vòng focus bị giữ trong menu cho đến khi đóng.

## Pagination — Kế thừa

Chia một tập dữ liệu lớn thành nhiều trang, cho phép người dùng di chuyển giữa các trang và nắm được quy mô dữ liệu.

`import { Pagination } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi: bảng dữ liệu hoặc danh sách dài cần chia trang đếm được; người dùng cần nhảy thẳng tới trang cụ thể; cần hiển thị tổng số bản ghi; người dùng thường quay lại vị trí xác định.
- KHÔNG dùng khi: dòng dữ liệu liên tục/vô hạn (dùng cuộn vô hạn thay thế); tập dữ liệu quá nhỏ hiển thị trọn một màn hình; tổng số bản ghi không xác định được (dùng nút "Tải thêm"); trên mobile cho luồng duyệt nhanh nơi cuộn tự nhiên hơn.

**Nên / Không nên**
- Nên: làm nổi trang hiện tại bằng nền `var(--ghn-primary)` và `aria-current="page"`; hiển thị meta "x–y trên z" để người dùng nắm quy mô; vô hiệu hóa nút lùi ở trang đầu và nút tiến ở trang cuối; đặt phân trang ngay dưới danh sách/bảng, căn lề nhất quán toàn sản phẩm.
- Không nên: đừng hiển thị toàn bộ số trang khi có hàng chục/trăm trang — dùng dấu rút gọn (…); đừng dùng nhiều màu nhấn khác nhau cho các ô (chỉ trang hiện tại dùng primary); đừng để nút tiến/lùi vẫn bấm được khi đã ở trang biên; đừng đặt ô bấm dưới 24px.

**Biến thể, kích thước & trạng thái**
- Biến thể: Đầy đủ (dải số trang + chọn cỡ trang + meta); Đơn giản (chỉ tiến/lùi + vị trí, hợp không gian hẹp); Có nhảy trang (ô nhập để đi thẳng); Dạng nhỏ (kích thước nén cho thanh công cụ dày đặc).
- Kích thước: Mặc định — ô 32px; Nhỏ — ô 24px.
- Trạng thái: Mặc định; Di chuột (hover); Hiện tại/active (nền primary); Tiêu điểm bàn phím; Vô hiệu hóa (disabled); Đang tải.

**Design tokens**
- `var(--ghn-primary)` — nền ô trang hiện tại (active)
- `var(--ghn-soft)` — nền nhẹ khi di chuột vào ô trang
- `var(--ghn-hover)` — viền và chữ ô trang khi hover
- `var(--ghn-text)` — chữ số trang mặc định
- `var(--ghn-muted)` — chữ meta "x–y trên z", icon mũi tên
- `var(--ghn-border)` — viền ô trang và nút điều hướng
- `var(--ghn-subtle)` — nền nút khi vô hiệu hóa
- `var(--ghn-r-default)` — bo góc 8px cho tất cả ô và nút
- `var(--ghn-s4)` / `var(--ghn-s8)` — khoảng cách giữa các ô (nhỏ/mặc định)
- `var(--ghn-s12)` — đệm ngang nút chọn cỡ trang

**Khả năng tiếp cận**
- Bọc trong `<nav aria-label="Phân trang">` để trình đọc màn hình nhận diện vùng điều hướng.
- Đánh dấu trang hiện tại bằng `aria-current="page"`; không chỉ dựa vào màu sắc.
- Nút chỉ-icon (tiến/lùi, nhảy trang) bắt buộc có `aria-label` mô tả rõ hành động.
- Mọi nút nhận tiêu điểm bằng `Tab` và hiển thị vòng tiêu điểm rõ ràng (outline 2px màu primary).
- Tỷ lệ tương phản chữ/nền tối thiểu 4.5:1; ô hiện tại nền primary với chữ trắng đạt chuẩn.
- Vùng chạm tối thiểu 24×24px, ưu tiên 32px cho thao tác cảm ứng thoải mái.
- Bàn phím: `Tab` qua các nút (lùi → số trang → tiến → chọn cỡ); `Enter`/`Space` kích hoạt; `←`/`→` chuyển trang nhanh khi tiêu điểm trong thanh phân trang.

## Steps — Kế thừa

Hiển thị tiến trình qua các bước tuần tự trong một quy trình nhiều giai đoạn.

`import { Steps } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng cho quy trình tuần tự nhiều giai đoạn: tạo đơn hàng, đăng ký tài khoản, thiết lập ví.
- Dùng để theo dõi hành trình đơn hàng (đã lấy, đang vận chuyển, đang giao, đã giao).
- Dùng khi biểu mẫu dài chia thành nhiều trang để giảm tải nhận thức.
- Dùng khi số bước cố định và biết trước (thường 3–5 bước).
- KHÔNG dùng cho điều hướng tự do, không theo thứ tự — dùng Tabs hoặc Menu thay thế.
- KHÔNG dùng khi có quá nhiều bước (trên 7–8) — cân nhắc nhóm lại hoặc dùng dạng dọc.
- KHÔNG dùng khi chỉ có một thao tác duy nhất — không cần Steps.
- KHÔNG dùng để hiển thị trạng thái tải/tiến trình theo phần trăm — dùng Progress thay thế.

**Nên / Không nên**
- Nên: Dùng tiêu đề ngắn, súc tích cho mỗi bước (tránh viết cả câu dài làm vỡ bố cục ngang).
- Nên: Giữ số bước trong khoảng 3–5 để dễ nắm bắt.
- Nên: Dùng màu đỏ error kết hợp icon và nhãn rõ ràng để báo bước gặp sự cố.
- Không nên: Viết tiêu đề bước thành cả câu dài khiến bố cục ngang bị vỡ.
- Không nên: Nhồi quá nhiều bước nhỏ (7–8+) khiến người dùng choáng ngợp.
- Không nên: Chỉ dùng màu để báo lỗi mà không kèm icon và nhãn rõ ràng.

**Biến thể, kích thước & trạng thái**
- Biến thể hướng: Ngang (mặc định, phù hợp tiêu đề ngắn, không gian rộng); Dọc (phù hợp tiêu đề dài, sidebar, màn hình mobile).
- Biến thể chỉ báo: Số/tick (mặc định); Dạng chấm dot (gọn, không hiển thị số); Icon (thay số bằng icon ngữ nghĩa, hữu ích cho tracking đơn hàng).
- Kích thước chỉ báo: Mặc định 32px (tiêu đề 14px, dùng cho trang đầy đủ); Nhỏ 24px (tiêu đề 13px, dùng cho panel phụ, card tóm tắt).
- Trạng thái từng bước: Hoàn thành (finish — tick, nền cam `#ff5200`); Đang xử lý (process — số, nền cam, tiêu đề đậm); Đang chờ (wait — số, viền xám `#d4d4d8`, tiêu đề muted); Lỗi (error — xmark, nền đỏ `#ff4d4f`, tiêu đề đỏ).
- Connector: Tô cam khi đoạn đã hoàn thành, giữ xám khi bước phía sau còn đang chờ.
- Responsive: Trên màn hình hẹp, Steps ngang nên tự chuyển sang dạng dọc hoặc rút gọn hiển thị "Bước 2/5".

**Design tokens**
- `var(--ghn-primary)` `#ff5200` — nền chỉ báo hoàn thành/đang xử lý và connector đã hoàn thành.
- `var(--ghn-on-primary)` `#fff` — màu số và icon tick trên nền chỉ báo cam.
- `var(--ghn-soft)` `#fff2e6` — nền hover bước tương tác, nền icon biến thể.
- `var(--ghn-text)` `#09090b` — tiêu đề bước hoàn thành và đang xử lý.
- `var(--ghn-muted)` `#52525b` — tiêu đề và mô tả bước đang chờ.
- `var(--ghn-border)` `#d4d4d8` — viền chỉ báo bước chờ và connector chưa hoàn thành.
- `var(--ghn-error)` `#ff4d4f` — nền chỉ báo và tiêu đề bước lỗi.
- Spacing: `8px` / `12px` (lưới 4px) cho khoảng cách chỉ báo tới tiêu đề và lề connector.

**Khả năng tiếp cận**
- Bước đang xử lý đánh dấu `aria-current="step"` để công nghệ hỗ trợ đọc đúng vị trí hiện tại.
- Mỗi bước cần nhãn văn bản; trạng thái (hoàn thành, đang xử lý, lỗi) truyền tải bằng nhãn ẩn cho trình đọc màn hình, không chỉ dựa màu hay icon.
- Khi Steps cho phép nhảy bước: di chuyển bằng `Tab`, kích hoạt bằng `Enter` hoặc `Space`; vòng focus phải luôn hiển thị rõ quanh chỉ báo.
- Bước lỗi luôn đi kèm icon xmark và nhãn mô tả — đảm bảo người dùng mù màu vẫn nhận biết được.
- Tương phản: số/icon trên nền cam dùng chữ trắng; tiêu đề bước chờ dùng muted `#52525b` trên nền trắng, đạt tỷ lệ tương phản tối thiểu.
- Chuyển động: màu chỉ báo và connector chuyển êm trong 200ms; tôn trọng tuỳ chọn giảm chuyển động của hệ thống.


# Nhập liệu

## AutoComplete — Kế thừa

Ô nhập liệu kết hợp danh sách gợi ý động, lọc theo từ khoá người dùng đang gõ để rút ngắn thời gian nhập và giảm sai sót.

`import { AutoComplete } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: tìm kiếm địa chỉ, phường/xã, quận/huyện khi tạo đơn hàng.
- Dùng: trường có nhiều lựa chọn (hàng trăm mục trở lên) không thể hiển thị hết trong dropdown thông thường.
- Dùng: gợi ý mã đơn, tên khách hàng, tên cửa hàng dựa trên lịch sử hoặc dữ liệu hệ thống.
- Dùng: khi người dùng có thể cần nhập giá trị nằm ngoài danh sách gợi ý.
- Không dùng: tập giá trị cố định và ngắn (dưới 7 mục) — dùng Select hoặc Radio thay thế.
- Không dùng: bắt buộc người dùng phải chọn đúng một giá trị hợp lệ — dùng Select để khoá lựa chọn.
- Không dùng: lọc dữ liệu trên trang/bảng — dùng Search input chuyên dụng.
- Không dùng: khi chỉ cần nhập văn bản tự do không cần gợi ý — dùng Input thường.

**Nên / Không nên**
- Nên: đặt nhãn rõ ràng và placeholder mô tả ví dụ giá trị cần nhập (ví dụ: "Tìm theo tên đường, phường…").
- Nên: giới hạn 5–8 gợi ý hiển thị, sắp xếp theo độ liên quan, cho cuộn nếu cần.
- Nên: hiển thị thông báo trạng thái rỗng thân thiện khi không có kết quả khớp.
- Nên: cho phép xác nhận giá trị tự do khi không có gợi ý phù hợp nhưng dữ liệu vẫn hợp lệ.
- Không nên: để ô trống không nhãn, không gợi ý, khiến người dùng không biết nên gõ gì.
- Không nên: đổ hàng chục gợi ý dài thượt cùng lúc khiến người dùng khó quét và phải cuộn nhiều.
- Không nên: đóng im lặng hoặc để danh sách trống rỗng khi không có kết quả, khiến người dùng tưởng hệ thống bị lỗi.
- Không nên: ép buộc người dùng phải chọn một gợi ý mới được tiếp tục, trong khi ngữ cảnh cần nhập tự do.

**Biến thể, kích thước & trạng thái**
- Biến thể: gợi ý cơ bản (chỉ văn bản); gợi ý có biểu tượng và mô tả phụ; gợi ý theo nhóm có tiêu đề; kèm trạng thái rỗng.
- Kích thước: Small (32px cao, 14px chữ, 8px đệm ngang) — Thanh công cụ, bộ lọc gọn; Medium/mặc định (40px cao, 14px, 12px) — Biểu mẫu tạo đơn; Large (48px cao, 16px, 16px) — Ô tìm kiếm nổi bật, màn hình cảm ứng.
- Trạng thái: Mặc định; Focus/đang gõ; Đang tải dữ liệu (spinner); Lỗi (error, viền đỏ); Vô hiệu hoá (disabled); Rỗng — không khớp.
- Mục gợi ý đang tô sáng dùng nền primary-soft (`#fff2e6`); chiều cao mỗi mục tối thiểu 36px; bo góc danh sách 8px.

**Design tokens**
- `var(--ghn-primary)` (#ff5200) — viền focus, biểu tượng nổi bật.
- `var(--ghn-primary-soft)` (#fff2e6) — nền mục gợi ý đang tô sáng.
- `var(--ghn-text)` (#09090b) — văn bản nhập và nội dung gợi ý chính.
- `var(--ghn-muted)` (#52525b) — mô tả phụ, tiêu đề nhóm, biểu tượng phụ.
- `var(--ghn-placeholder)` (#71717a) — văn bản placeholder, biểu tượng kính lúp.
- `var(--ghn-border)` (#d4d4d8) — viền ô trạng thái mặc định, viền danh sách.
- `var(--ghn-bg-subtle)` (#fafafa) — nền ô khi vô hiệu hoá.
- `var(--ghn-error)` (#ff4d4f) — viền và thông báo lỗi.
- Bo góc: 8px (ô nhập và danh sách); Khoảng hở ô–danh sách: 4px; Font: Inter 14px.

**Khả năng tiếp cận**
- Vai trò ARIA: ô nhập là `combobox`; danh sách là `listbox`; mỗi gợi ý là `option`.
- `aria-expanded` phản ánh trạng thái mở/đóng danh sách; `aria-controls` trỏ tới danh sách.
- Dùng `aria-activedescendant` để thông báo mục đang tô sáng mà không rời focus khỏi ô nhập.
- Mỗi AutoComplete phải có nhãn rõ ràng qua thẻ `<label>` hoặc `aria-label`; không dùng placeholder thay nhãn.
- Điều hướng bàn phím đầy đủ: `↓/↑` di chuyển gợi ý, `Enter` chọn, `Esc` đóng danh sách, `Tab` rời trường.
- Số kết quả và trạng thái "không có kết quả" thông báo qua vùng `aria-live`.
- Vùng chạm mỗi mục gợi ý tối thiểu 36px.

## Cascader — Kế thừa

Ô lựa chọn phân cấp qua các cột liên tiếp, phổ biến nhất ở GHN là chọn địa chỉ Tỉnh/Thành → Quận/Huyện → Phường/Xã.

`import { Cascader } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: chọn địa chỉ hành chính (Tỉnh → Quận → Phường) trong luồng tạo đơn, đăng ký bưu cục.
- Dùng: dữ liệu có quan hệ cha–con rõ ràng, từ 2 đến 4 cấp; cần ràng buộc tổ hợp hợp lệ.
- Dùng: lọc đơn hàng, báo cáo theo vùng địa lý phân cấp.
- KHÔNG dùng: dữ liệu chỉ một cấp phẳng — dùng Select thông thường.
- KHÔNG dùng: các trường độc lập, không phụ thuộc nhau — dùng nhiều Select riêng.
- KHÔNG dùng: hơn 4–5 cấp sâu (cột tràn ngang, khó thao tác) — cân nhắc dạng cây có tìm kiếm.
- KHÔNG dùng: khi người dùng thường gõ thẳng giá trị nhanh hơn — bật ô tìm kiếm thay vì bắt duyệt cột.

**Nên / Không nên**
- Nên: giữ thứ tự cột đúng cấp hành chính (Tỉnh/Thành → Quận/Huyện → Phường/Xã).
- Không nên: đảo lộn hoặc gộp nhiều cấp vào một cột.
- Nên: hiển thị đầy đủ đường dẫn trong ô kích hoạt (Hà Nội / Cầu Giấy / Dịch Vọng).
- Không nên: chỉ hiển thị cấp cuối ("Dịch Vọng") mà thiếu ngữ cảnh tỉnh/quận.
- Nên: bật `showSearch` khi danh sách dài để người dùng gõ nhanh.
- Không nên: bắt người dùng cuộn qua hàng trăm phường mà không có cách lọc.
- Nên: kèm văn bản giải thích bên dưới ô khi có lỗi (không chỉ đổi màu viền).

**Biến thể, kích thước & trạng thái**
- Biến thể: Mặc định (duyệt từng cột) · Có tìm kiếm (`showSearch`) · Chọn nhiều (`multiple`) · Cho phép chọn cấp trung gian (`changeOnSelect`).
- Kích thước: `small` 32px · `default` 40px · `large` 48px — bo góc 8px ở mọi kích thước.
- Trạng thái ô kích hoạt: Mặc định · Focus/mở (viền primary + vầng sáng) · Đã chọn có thể xóa · Lỗi (viền đỏ + text giải thích) · Vô hiệu hóa · Đang tải (spinner).

**Design tokens**
- `var(--ghn-white)` — nền ô và bảng cột
- `var(--ghn-border)` — viền ô mặc định (`#d4d4d8`)
- `var(--ghn-primary)` — viền focus, chữ mục đang chọn (`#ff5200`)
- `var(--ghn-soft)` — vầng sáng focus, nền mục đang chọn (`#fff2e6`)
- `var(--ghn-error)` — viền và biểu tượng trạng thái lỗi (`#ff4d4f`)
- `var(--ghn-bg-subtle)` — nền ô khi vô hiệu hóa (`#fafafa`)
- `var(--ghn-text)` — chữ giá trị và mục (`#09090b`)
- `var(--ghn-muted)` / `var(--ghn-placeholder)` — biểu tượng phụ / văn bản gợi ý

**Khả năng tiếp cận**
- Bảng lựa chọn dùng `role="tree"` / `role="treeitem"`, nêu rõ cấp hiện tại và số phần tử.
- Ô kích hoạt cần nhãn rõ ràng liên kết qua `aria-labelledby` hoặc nhãn trường.
- Dùng `aria-expanded` để báo trạng thái mở/đóng cho trình đọc màn hình.
- Hỗ trợ đầy đủ bàn phím: `Tab`, `Enter`/`Space`, `Esc`, phím mũi tên `↑↓←→`.
- Khi nạp cấp con động, dùng `aria-live` báo "Đang tải" tránh người dùng hiểu nhầm là treo.
- Tương phản đạt chuẩn; trạng thái lỗi không chỉ dựa vào màu mà kèm văn bản mô tả.

## Checkbox — Ổn định

Cho phép người dùng chọn một hoặc nhiều mục độc lập trong một nhóm, hoặc bật/tắt một lựa chọn đơn lẻ dạng xác nhận.

```js
import { Checkbox } from 'antd';
```

**Khi nào dùng / KHÔNG dùng**
- Dùng khi người dùng có thể chọn **nhiều mục** độc lập trong cùng một nhóm (ví dụ: nhiều dịch vụ cộng thêm cho đơn hàng).
- Dùng cho lựa chọn bật/tắt dạng **đồng ý / xác nhận** trong biểu mẫu (ví dụ: "Tôi đồng ý với điều khoản").
- Dùng để **chọn hàng loạt** dòng trong bảng dữ liệu (xóa, in vận đơn, gán tài xế).
- Dùng trong **bộ lọc** nơi có thể tích đồng thời nhiều tiêu chí.
- KHÔNG dùng khi chỉ được chọn **duy nhất một** trong nhóm → dùng **Radio**.
- KHÔNG dùng khi bật/tắt một trạng thái có **hiệu lực tức thì** (ví dụ bật thông báo) → dùng **Switch**.
- KHÔNG dùng khi số lựa chọn quá nhiều và chiếm nhiều không gian → cân nhắc **Select nhiều giá trị**.
- KHÔNG dùng khi cần chọn từ dải giá trị liên tục → dùng **Slider**.

**Nên / Không nên**
- Nên dùng nhãn ngắn gọn, khẳng định, mô tả rõ hệ quả khi chọn.
- Không nên dùng nhãn phủ định kép hoặc dạng câu hỏi (ví dụ: "Không gửi hàng không dễ vỡ?") gây nhầm lẫn về việc tích hay không.
- Nên gom các ô tích liên quan dưới một tiêu đề nhóm và xếp **dọc** để dễ quét mắt.
- Không nên xếp **ngang** các ô có nhãn dài; chúng dễ xuống dòng rối và khó xác định nhãn thuộc ô nào.
- Không dùng Switch để thay thế Checkbox cho việc đồng ý điều khoản; Switch hợp với bật/tắt cài đặt có hiệu lực tức thì.
- Trên màn hình cảm ứng, ưu tiên bố cục dọc với khoảng cách giữa các dòng tối thiểu 8px để tránh chạm nhầm.

**Biến thể, kích thước & trạng thái**
- **Checkbox đơn:** ô tích độc lập đi kèm nhãn, dùng cho lựa chọn đồng ý/xác nhận.
- **Nhóm dọc:** nhiều Checkbox xếp dọc — bố cục mặc định cho danh sách dài, dễ quét mắt nhất.
- **Nhóm ngang:** xếp ngang, phù hợp khi số lựa chọn ít (2–4) và nhãn ngắn gọn.
- **Cha–con indeterminate:** ô "Chọn tất cả" thể hiện trạng thái chọn một phần (dấu gạch ngang) khi chỉ một số con được tích; nhấp vào sẽ chuyển sang chọn tất cả hoặc bỏ chọn tất cả.
- **Kích thước mặc định:** ô tích 16px, chữ nhãn 14px. **Kích thước nhỏ (Small):** ô tích 14px, chữ 13px — dùng trong bảng mật độ cao.
- **Trạng thái:** unchecked, checked, indeterminate, focus, disabled-unchecked, disabled-checked.
- Vùng bấm tối thiểu 24px chiều cao; bo góc ô 4px.

**Design tokens**
- Nền ô khi chọn / indeterminate: `#ff5200` (màu chủ đạo GHN)
- Nền ô khi hover (đã chọn): `#ff7429`
- Nền ô khi nhấn: `#d4490b`
- Dấu tích / gạch ngang: `#fff`
- Viền ô mặc định (chưa chọn): `#d4d4d8`
- Viền hover (chưa chọn): `#ff5200`
- Quầng focus: `#fff2e6`
- Màu nhãn: `#09090b`
- Màu mô tả phụ: `#52525b`
- Nền khi vô hiệu: `#fafafa`
- Cạnh ô mặc định: `16px` | nhỏ: `14px` | bo góc: `4px` | khoảng ô–nhãn: `8px`
- Phông: Inter, letter-spacing: 0.1px

**Khả năng tiếp cận**
- Mỗi ô đóng vai trò `checkbox`; trình đọc màn hình đọc đúng trạng thái "đã chọn", "chưa chọn" hoặc "mixed" (indeterminate cho ô cha).
- Mọi Checkbox phải có nhãn liên kết; nhấp vào nhãn cũng đổi trạng thái ô.
- Nhóm Checkbox nên bao trong fieldset có legend mô tả ngữ cảnh chung.
- Điều hướng bằng `Tab` để focus, `Space` để bật/tắt — mọi thao tác chuột đều có tương đương bàn phím.
- Dấu tích trắng trên nền `#ff5200` và viền `#d4d4d8` trên nền trắng đạt tương phản tối thiểu; không dùng riêng màu sắc để truyền đạt trạng thái.
- Khi nhóm bắt buộc mà chưa chọn, thông báo lỗi phải gắn với nhóm và được trình đọc màn hình thông báo — không chỉ đổi màu viền.

## Color Picker — Kế thừa

Bộ chọn màu cho phép người dùng chọn một giá trị màu thông qua vùng độ bão hòa, thanh hue, ô nhập HEX và bảng màu định sẵn của GHN.

`import { ColorPicker } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi người dùng cần tự do chọn màu tùy ý: tùy biến chủ đề thương hiệu, màu nhãn dán, nhãn đơn hàng, hoặc nhập mã HEX chính xác cho cấu hình hiển thị.
- Dùng khi tập màu là liên tục, không giới hạn số lượng, hoặc cho phép chọn nhanh từ bảng màu định sẵn GHN.
- KHÔNG dùng khi chỉ có 2–5 màu cố định: hãy dùng Radio hoặc Segmented.
- KHÔNG dùng khi màu không mang ý nghĩa cấu hình mà chỉ là trạng thái hệ thống.
- KHÔNG dùng thay thế cho việc chọn theme sáng/tối: dùng Switch chuyên dụng.
- KHÔNG dùng trên luồng cần thao tác nhanh một chạm trên thiết bị nhỏ.

**Nên / Không nên**
- Nên: Hiển thị mã HEX cạnh ô màu để người dùng biết chính xác giá trị.
- Nên: Đặt các màu thương hiệu GHN làm preset đầu tiên trong bảng định sẵn.
- Nên: Giữ trigger có nhãn rõ ràng cho biết nó dùng để chọn màu gì.
- Nên: Đóng panel khi người dùng nhấn ra ngoài hoặc nhấn Esc.
- Không nên: Ẩn giá trị màu hiện tại khiến người dùng phải mở panel mới biết.
- Không nên: Đặt panel có chiều cao vượt quá 90vh gây tràn màn hình.
- Không nên: Dùng width cứng nhỏ làm vùng gradient khó kéo trên di động.
- Không nên: Bỏ aria-label cho các nút chỉ-icon như nút xóa hay swatch.

**Biến thể, kích thước & trạng thái**
- Biến thể trigger: mặc định (ô màu + mã HEX), chỉ ô màu, có nút xóa (với trạng thái "Chưa chọn").
- Kích thước trigger: `small` (16px swatch, font 12px), `middle` (20px swatch, font 13px — mặc định), `large` (24px swatch, font 14px).
- Trạng thái: mặc định, hover (viền `--ghn-primary-hover`), active (nền `--ghn-soft` + ring), disabled (opacity 0.6, nền `--ghn-subtle`).

**Design tokens**
- `--ghn-primary` (#ff5200) — màu preset chủ đạo và viền trigger khi active
- `--ghn-soft` (#fff2e6) — nền trigger khi active
- `--ghn-hover` / `--ghn-primary-hover` (#ff7429) — viền và ô màu khi hover
- `--ghn-border` (#d4d4d8) — viền trigger, panel và swatch
- `--ghn-text` (#09090b) — chữ mã HEX
- `--ghn-muted` (#52525b) — placeholder và icon mũi tên
- `--ghn-r-default` (8px) — bo góc trigger, panel, ô HEX
- `--ghn-r-tag` (6px) — bo góc swatch
- `--ghn-s8` / `--ghn-s12` (8px / 12px) — khoảng cách trong panel

**Khả năng tiếp cận**
- Trigger là `<button>` thật, focus được bằng Tab và có vòng focus rõ ràng.
- Mỗi swatch màu và nút chỉ-icon đều có `aria-label` mô tả màu hoặc hành động.
- Vùng độ bão hòa và thanh hue dùng vai trò `slider` với phím mũi tên để điều chỉnh.
- Tương phản con trỏ / nền đáp ứng chuẩn WCAG AA.
- Nhấn Esc đóng panel và trả focus về trigger ban đầu.
- Trên màn hình dưới 900px, panel chuyển sang drawer full-width để dễ thao tác bằng ngón tay.

## Date Picker — Kế thừa

Trường nhập gắn lịch trực quan, cho phép người dùng chọn một ngày hoặc khoảng ngày bằng thao tác nhìn-và-bấm thay vì gõ tay.

`import { DatePicker } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: chọn ngày lấy hàng, ngày hẹn giao, hạn xử lý đơn; lọc danh sách đơn theo ngày hoặc khoảng ngày; đặt khoảng thời gian cho báo cáo/thống kê doanh thu; khi định dạng và vùng ngày hợp lệ cần kiểm soát chặt.
- KHÔNG dùng: chỉ chọn tháng hoặc năm đơn lẻ — dùng bộ chọn tháng/năm gọn hơn; nhập giờ phút độc lập không gắn ngày — dùng Time Picker; vài lựa chọn cố định như "Hôm nay / 7 ngày / 30 ngày" — dùng nhóm chip nhanh; năm sinh trải dài hàng chục năm — ô nhập số hoặc chọn năm trực tiếp nhanh hơn lật lịch.

**Nên / Không nên**
- Nên: dùng placeholder mô tả rõ loại ngày, ví dụ "Chọn ngày lấy hàng", để người dùng biết ô dùng cho mục đích gì.
- Nên: khóa ngay trên lịch những ngày không hợp lệ (quá khứ với lịch hẹn, ngày nghỉ vận hành) để chặn lỗi từ đầu.
- Nên: giữ một định dạng ngày `dd/mm/yyyy` thống nhất ở mọi Date Picker trong sản phẩm GHN.
- Không nên: để placeholder mơ hồ kiểu "dd/mm/yyyy" mà không cho biết đây là ngày của việc gì.
- Không nên: cho chọn mọi ngày rồi mới báo lỗi đỏ sau khi gửi biểu mẫu — khiến người dùng phải làm lại.
- Không nên: trộn lẫn nhiều định dạng (mm/dd, yyyy-mm-dd) giữa các màn hình, gây nhầm ngày và tháng.

**Biến thể, kích thước & trạng thái**
- Biến thể: chọn một ngày (mặc định, trigger hiển thị `dd/mm/yyyy`); chọn khoảng ngày (hai ô ngày bắt đầu–kết thúc, ngày giữa khoảng tô nền nhạt `#fff2e6`); trạng thái rỗng (placeholder màu `#71717a`); có nút xóa nhanh (icon xóa xuất hiện khi hover).
- Kích thước ô trigger: sm (32px cao, padding 8px, font 13px) dùng cho thanh lọc/bảng mật độ cao; md (40px, 12px, 14px) mặc định đa số trường hợp; lg (48px, 16px, 16px) dùng cho biểu mẫu trọng tâm và màn hình cảm ứng.
- Trạng thái ô trigger: mặc định, focus/đang mở (viền cam + quầng sáng), lỗi (viền đỏ + icon cảnh báo), vô hiệu hóa (opacity 0.6, cursor not-allowed).
- Trạng thái ô ngày: được chọn (nền cam `#ff5200`, chữ trắng); hôm nay (viền cam, không có nền); trong khoảng hover (nền nhạt `#fff2e6`); bị khóa (gạch ngang, opacity 0.6, không nhận focus).

**Design tokens**
- `var(--ghn-primary)` `#ff5200` — nền ngày được chọn, viền hôm nay, viền trigger focus
- `var(--ghn-on-primary)` `#ffffff` — chữ trên ngày được chọn
- `var(--ghn-primary-soft)` `#fff2e6` — nền ngày trong khoảng, quầng sáng focus
- `var(--ghn-border)` `#d4d4d8` — viền mặc định ô trigger
- `var(--ghn-error)` `#ff4d4f` — viền và icon trạng thái lỗi
- `var(--ghn-text)` `#09090b` — chữ ngày chọn được
- `var(--ghn-text-muted)` `#52525b` — nhãn tháng, mũi tên điều hướng
- `var(--ghn-placeholder)` `#71717a` — gợi ý khi chưa chọn, nhãn thứ trong tuần
- `var(--ghn-bg-subtle)` — nền ô trigger vô hiệu hóa
- Bo góc trigger/panel: `8px` (`var(--ghn-r-default)`); bo góc ô ngày: `6px` (`var(--ghn-r-tag)`); khe lưới ngày: `4px`; padding panel: `12px` (`var(--ghn-s12)`)

**Khả năng tiếp cận**
- Bảng ngày dùng `role=grid`; mỗi ô ngày là ô lưới chọn được, trình đọc màn hình thông báo đúng hàng/cột.
- Ngày được chọn gắn `aria-selected=true`; ngày bị khóa gắn `aria-disabled=true` và không nhận focus.
- Mỗi ô ngày có nhãn đầy đủ, ví dụ "Thứ Bảy, 31 tháng 5, 2026", thay vì chỉ số.
- Ô trigger luôn có nhãn (`aria-label` hoặc nhãn trực quan liền kề); thông báo lỗi liên kết qua `aria-describedby`.
- Hỗ trợ bàn phím: `Tab`, `Enter`/`Space` mở panel; phím mũi tên di chuyển ô ngày; `Esc` đóng không lưu; `PageUp`/`PageDown` lật tháng.
- Ngày hôm nay có viền và ngày bị khóa có gạch ngang — không chỉ phân biệt bằng màu sắc (đáp ứng WCAG).
- Tương phản: chữ trắng `#fff` trên nền cam `#ff5200` và chữ `#09090b` trên nền trắng đều đạt WCAG AA.

## Form — Kế thừa

Bố cục nhãn–trường nhất quán kèm kiểm tra hợp lệ, dùng để thu thập dữ liệu có cấu trúc trong hệ sinh thái GHN (tạo đơn hàng, đăng nhập, cập nhật thông tin, cấu hình tài khoản).

`import { Form } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: thu thập thông tin có cấu trúc (tạo đơn, khai báo người gửi/nhận, kích thước kiện hàng); tác vụ cấu hình (cài đặt tài khoản, địa chỉ lấy hàng mặc định); đăng nhập, đăng ký, đổi mật khẩu; khi cần xác thực dữ liệu trước khi gửi hệ thống.
- Không dùng: chỉ một lựa chọn nhanh đơn lẻ — dùng nút bấm hoặc menu; bật/tắt tùy chọn có hiệu lực ngay — dùng Switch độc lập; tìm kiếm tức thời — dùng ô tìm kiếm với kết quả trực tiếp; hiển thị thông tin chỉ đọc — dùng Descriptions hoặc bảng.

**Nên / Không nên**
- Nên: luôn để nhãn nhìn thấy phía trên trường; placeholder chỉ làm ví dụ định dạng, không thay thế nhãn.
- Không nên: dùng placeholder thay nhãn — nhãn biến mất ngay khi người dùng bắt đầu gõ.
- Nên: thông báo lỗi cụ thể, nói rõ vấn đề và cách sửa, đặt ngay dưới trường (ví dụ: "Số điện thoại cần đủ 10 chữ số").
- Không nên: thông báo mơ hồ như "Lỗi!" hoặc "Dữ liệu không hợp lệ".
- Nên: nhóm các trường liên quan lại (thông tin người gửi, người nhận, kiện hàng) và đặt tiêu đề nhóm.
- Không nên: xếp tất cả trường thành danh sách phẳng không phân nhóm.
- Chỉ hỏi những gì thật sự cần; điền sẵn giá trị mặc định hợp lý để rút ngắn quãng đường hoàn thành.
- Không bao giờ mất dữ liệu người dùng đã nhập khi xảy ra lỗi; hành động phá hủy cần xác nhận.

**Biến thể, kích thước & trạng thái**
- Bố cục dọc (mặc định): nhãn nằm trên trường — phù hợp màn hình hẹp và di động.
- Bố cục ngang: nhãn nằm trái trường — phù hợp Form cấu hình dày đặc trên màn hình rộng.
- Kích thước: Small (32px cao, 14px chữ, padding ngang 8px) — Form dày đặc, bộ lọc bảng; Medium (40px, 14px, 12px) — mặc định hầu hết Form nghiệp vụ; Large (48px, 16px, 16px) — Form quan trọng, đăng nhập, thiết bị cảm ứng.
- Trạng thái trường: mặc định (viền xám), focus (viền cam + vòng sáng 3px), đã nhập, lỗi (viền đỏ + icon cảnh báo + văn bản), thành công (viền xanh + dấu kiểm), vô hiệu (nền xám, không nhận focus).
- Loại trường hỗ trợ: văn bản, Select, Checkbox, Radio, Switch, Textarea.
- Xác thực kết hợp: on blur (kiểm tra khi rời trường), on submit (kiểm tra toàn bộ + cuộn tới lỗi đầu tiên), on change (xóa lỗi ngay khi giá trị hợp lệ).

**Design tokens**
- `var(--ghn-primary)` — viền và vòng sáng khi focus
- `var(--ghn-text)` — màu nhãn và giá trị nhập
- `var(--ghn-muted)` — văn bản trợ giúp, icon phụ
- `var(--ghn-placeholder)` — chữ gợi ý trong trường trống
- `var(--ghn-border)` — viền trường mặc định
- `var(--ghn-error)` — viền, icon, văn bản lỗi; dấu bắt buộc (*)
- `var(--ghn-success)` — viền và icon trạng thái hợp lệ
- `var(--ghn-warning)` — cảnh báo nhẹ chưa nghiêm trọng
- `var(--ghn-bg-subtle)` — nền trường disabled
- `var(--ghn-radius)` (8px) — bo góc trường nhập, select, textarea
- `var(--ghn-radius-sm)` (6px) — bo góc checkbox, thẻ nhỏ
- `var(--ghn-space-1)` (4px) — khoảng cách nhãn–trường
- `var(--ghn-space-2)` (8px) — khoảng cách trường–văn bản trợ giúp
- `var(--ghn-space-4)` (16px) — khoảng dọc giữa các trường
- `var(--ghn-space-6)` (24px) — khoảng giữa các nhóm trường

**Khả năng tiếp cận**
- Mỗi trường liên kết nhãn qua `label for` / `aria-label`; văn bản trợ giúp và lỗi liên kết qua `aria-describedby`.
- Trường bắt buộc khai báo `aria-required="true"`; dấu * chỉ là dấu hiệu thị giác bổ trợ.
- Trường lỗi khai báo `aria-invalid="true"`.
- Thông báo lỗi đặt trong vùng `aria-live="polite"`; lỗi tổng hợp khi submit dùng `aria-live="assertive"`.
- Trạng thái lỗi không chỉ dựa vào màu: luôn có icon và văn bản đi kèm.
- Vòng sáng focus 3px, tương phản rõ, không bị tắt khi dùng bàn phím.
- Vùng chạm tối thiểu 44×44px trên thiết bị cảm ứng (kể cả checkbox, radio).
- Tab đi theo thứ tự logic; Enter gửi Form; Esc đóng dropdown; Space bật/tắt checkbox/switch.
- Văn bản nhãn và giá trị đạt tương phản tối thiểu 4.5:1 trên nền trắng.

## Input Number — Kế thừa

Trường nhập liệu chuyên dụng cho dữ liệu số, kế thừa kiểu dáng Input và bổ sung bộ điều khiển tăng/giảm (stepper) để nhập và hiệu chỉnh giá trị nhanh chính xác.

`import { InputNumber } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng: nhập số lượng kiện hàng, khối lượng (kg), kích thước dài/rộng/cao (cm), giá trị tiền tệ cần tính toán như COD, phí dịch vụ, giá trị khai báo.
- Dùng: mọi giá trị cần ràng buộc khoảng và tăng/giảm theo bước cố định.
- KHÔNG dùng cho số điện thoại, mã đơn hàng, mã bưu chính — đây là chuỗi định danh, dùng Input thường.
- KHÔNG dùng khi chọn một giá trị trong tập rời rạc ngắn — dùng Select hoặc Radio.
- KHÔNG dùng để điều chỉnh giá trị liên tục trong khoảng trực quan (độ sáng, âm lượng) — dùng Slider.
- KHÔNG dùng để bật/tắt tùy chọn nhị phân — dùng Switch hoặc Checkbox.

**Nên / Không nên**

- Nên: ghi rõ đơn vị đo trong nhãn trường (ví dụ "Khối lượng (kg)") để người dùng nhập đúng đại lượng.
- Nên: luôn khai báo `min`, `max`, `step` phù hợp ngữ cảnh — tránh người dùng nhập giá trị vô nghĩa (ví dụ khối lượng âm).
- Nên: khi vượt ngưỡng, hiển thị thông báo nêu rõ giới hạn (ví dụ "Tối đa 30 kg") để người dùng tự điều chỉnh.
- Không nên: bỏ đơn vị khiến người dùng phân vân (kg hay gram), dễ nhập sai dữ liệu vận đơn.
- Không nên: chỉ báo lỗi chung chung ("Giá trị không hợp lệ") mà không nói rõ ngưỡng.

**Biến thể, kích thước & trạng thái**

Biến thể:
- Mặc định (có stepper): cụm nút tăng/giảm bên phải, dùng phổ biến nhất cho số lượng và đại lượng.
- Không stepper (`controls={false}`): ẩn cụm nút, chỉ cho nhập trực tiếp — dùng khi không gian hẹp.
- Có tiền tố (prefix) và định dạng: thêm ký hiệu đơn vị (₫, kg, cm) và phân tách hàng nghìn — dùng cho COD, phí dịch vụ.

Kích thước (prop `size`):
- `small` — cao 24px, chữ 12px, đệm ngang 8px
- `middle` (mặc định) — cao 32px, chữ 14px, đệm ngang 12px
- `large` — cao 40px, chữ 16px, đệm ngang 12px
- Bo góc cố định 8px ở mọi kích thước; trên di động ưu tiên kích thước Lớn.

Trạng thái: Mặc định/Trống, Đang focus (viền primary #ff5200 + vầng sáng mềm), Lỗi (viền + chữ #ff4d4f), Vô hiệu hóa, Chỉ đọc, Chạm ngưỡng min/max (nút stepper tương ứng mờ đi).

**Design tokens**

- Màu chữ giá trị: `#09090b`
- Màu placeholder: `#71717a`
- Viền mặc định (và vách ngăn stepper): `#d4d4d8`
- Viền / icon khi focus: `#ff5200`
- Vầng sáng focus: `#fff2e6`
- Nút stepper hover: `#ff7429`
- Viền / chữ lỗi: `#ff4d4f`
- Nền vô hiệu / chỉ đọc: `#fafafa`
- Nền trường mặc định: `#fff`
- Bo góc: `8px`; Đệm ngang (vừa): `12px`; Cỡ chữ (vừa): `14px`; Letter-spacing: `.1px`; Font: `Inter`

**Khả năng tiếp cận**

- Vai trò `role="spinbutton"` cho trình đọc màn hình nhận biết ô nhập số có thể tăng/giảm.
- Cung cấp `aria-valuenow`, `aria-valuemin`, `aria-valuemax`; dùng `aria-valuetext` khi cần đọc kèm đơn vị (ví dụ "2 ki-lô-gam").
- Mọi trường phải có nhãn liên kết hoặc `aria-label`; không dựa duy nhất vào placeholder.
- Khi không hợp lệ: đặt `aria-invalid="true"` và liên kết thông báo qua `aria-describedby`.
- Toàn bộ thao tác đạt được bằng phím ↑ ↓ Tab Enter; nút stepper không phải điểm dừng Tab riêng.
- Chữ trên nền trắng dùng `#09090b` đạt tỷ lệ tương phản cao; viền focus và viền lỗi đều phân biệt rõ với nền.

## Input — Ổn định

Ô nhập liệu một dòng kèm nhãn và trợ giúp, dùng để thu thập văn bản ngắn như tên người nhận, số điện thoại, mã đơn hàng hay từ khóa tìm kiếm.

`import { Input } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: văn bản ngắn một dòng (tên, địa chỉ, mã đơn), ô tìm kiếm với icon kính lúp, số điện thoại/email/mã giảm giá có quy tắc định dạng, trường mật khẩu kèm nút hiện/ẩn.
- Không dùng: nội dung dài nhiều dòng (ghi chú giao hàng) — dùng Textarea; lựa chọn từ danh mục cố định (tỉnh/thành, dịch vụ) — dùng Select; chọn ngày/giờ — dùng DatePicker; bật/tắt tùy chọn — dùng Switch hoặc Checkbox.

**Nên / Không nên**
- Nên: luôn có nhãn riêng phía trên ô; placeholder chỉ làm ví dụ định dạng, không thay thế nhãn.
- Nên: thông báo lỗi nói rõ vấn đề và cách sửa, đặt ngay dưới ô (ví dụ: "Chỉ nhập chữ số, ví dụ 0901234567").
- Nên: đặt đơn vị vào nhãn và để ô đủ rộng cho giá trị dự kiến.
- Không nên: dùng placeholder thay nhãn — người dùng quên trường cần gì ngay khi bắt đầu gõ.
- Không nên: chỉ tô đỏ mà không giải thích lỗi ("Giá trị không hợp lệ" là không đủ).
- Không nên: thu hẹp ô quá hẹp hoặc bỏ đơn vị khiến người dùng đoán mò.
- Không nên: ẩn vòng focus khi điều hướng bằng bàn phím.
- Không nên: đặt nhãn bên trái ô trên mobile — nhãn phải luôn nằm phía trên ô.

**Biến thể, kích thước & trạng thái**
- Biến thể: cơ bản, có icon đầu ô (prefix/search), có nút xóa nhanh (allowClear), mật khẩu (fa-eye/fa-eye-slash), có tiền tố cố định (prefix ký hiệu tiền tệ ₫).
- Kích thước: Small 36px (bộ lọc, bảng dày đặc) · Medium 44px mặc định (hầu hết biểu mẫu) · Large 52px (biểu mẫu trọng tâm, mobile).
- Trạng thái: Mặc định (viền `#d4d4d8`, nền trắng) · Hover (viền `#52525b`) · Focus (viền cam `#ff5200` + vòng sáng) · Disabled (nền xám nhạt, giảm opacity) · Lỗi (viền `#ff4d4f` + icon + help text màu đỏ).

**Design tokens**
- `--ghn-text` (`#09090b`) — màu chữ nhập
- `--ghn-placeholder` (`#71717a`) — màu placeholder
- `--ghn-muted` (`#52525b`) — màu chữ phụ / help text
- `--ghn-border` (`#d4d4d8`) — viền mặc định
- `#ff5200` — viền và vòng focus
- `--ghn-error` (`#ff4d4f`) — viền, icon, thông báo lỗi
- Bo góc: `8px`; Chiều cao mặc định: `44px`; Đệm ngang: `16px`; Khoảng cách nhãn–ô và ô–help: `4px`; Font: Inter, letter-spacing: `0.1px`.

**Khả năng tiếp cận**
- Mỗi ô phải có nhãn liên kết qua `for`/`id` hoặc bọc trong thẻ nhãn.
- Khi lỗi: gắn `aria-invalid` và liên kết thông báo lỗi qua `aria-describedby`.
- Help text liên kết với ô qua `aria-describedby`.
- Trường bắt buộc đánh dấu bằng `aria-required`, không chỉ dấu sao màu đỏ.
- Vòng focus màu cam `#ff5200` luôn hiển thị, không bao giờ bị ẩn.
- Placeholder `#71717a` chỉ dùng cho gợi ý, không dùng cho nội dung quan trọng (tỷ lệ tương phản thấp hơn chữ nhập `#09090b`).
- Chiều cao tối thiểu 44px đảm bảo vùng chạm dễ trúng trên thiết bị cảm ứng.
- Điều hướng: Tab/Shift+Tab di chuyển giữa ô; Enter gửi biểu mẫu; Esc xóa ô tìm kiếm.

## Mentions — Kế thừa

Vùng nhập văn bản nhiều dòng cho phép người dùng gắn thẻ người hoặc đối tượng bằng ký tự kích hoạt `@` hoặc `#`, kết hợp textarea với combobox gợi ý động ngay tại vị trí con trỏ.

`import { Mentions } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: ô bình luận, ghi chú nội bộ trên đơn hàng hoặc ticket cần nhắc đồng nghiệp xử lý; trao đổi nhiều dòng giữa các bộ phận (kho, giao hàng, CSKH); khi cần gắn thẻ người để họ nhận thông báo trong khi vẫn giữ văn bản tự do; danh sách đối tượng đủ lớn cần lọc theo từ khóa.
- KHÔNG dùng: khi chỉ cần chọn một giá trị từ danh sách cố định — dùng Select hoặc AutoComplete; khi trường chỉ chứa một dòng ngắn không có văn bản tự do — dùng ô chọn người riêng; khi gợi ý không phụ thuộc ký tự kích hoạt mà cần xuất hiện cho mọi từ — đó là AutoComplete; cho biểu mẫu nhập số liệu, mã đơn hay nội dung không liên quan đến việc nhắc người.

**Nên / Không nên**
- Nên: hiển thị avatar kèm tên đầy đủ để phân biệt người trùng tên; báo rõ khi không có kết quả khớp (trạng thái rỗng có thông báo); cho phép tiếp tục gõ văn bản thường sau khi đóng popup mà không bắt buộc chọn một mục; giới hạn tối đa hai ký tự kích hoạt trong cùng một trường.
- Không nên: chỉ liệt kê tên trống không, khiến không thể phân biệt người trùng tên; để popup trống khi không có kết quả (gây nhầm tưởng lỗi); khóa con trỏ trong popup hoặc tự chèn mục đầu tiên khi người dùng chỉ muốn gõ `@` như văn bản thường.

**Biến thể, kích thước & trạng thái**
- Biến thể: nhắc người với `@` (mặc định), gắn thẻ đơn hàng với `#` (nguồn dữ liệu riêng); popup không có kết quả (trạng thái rỗng có thông báo); popup tự lật lên trên khi không đủ chỗ phía dưới.
- Kích thước: Nhỏ (sm) — min-height 56px, padding 8px, chữ 13px; Vừa/mặc định — 72px, 12px, 14px; Lớn (lg) — 96px, 16px, 16px.
- Trạng thái ô nhập: mặc định, focus (viền cam `#ff5200`), disabled (nền xám nhạt), lỗi (viền đỏ `#ff4d4f`).
- Trạng thái mục gợi ý: mặc định, active/nổi (nền cam nhạt `#fff2e6`), disabled (opacity 0.45).

**Design tokens**
- Màu thẻ nhắc đến (tên đã chèn): `#006fad`
- Viền trường mặc định: `#d4d4d8`; focus: `var(--ghn-primary)` `#ff5200`; lỗi: `#ff4d4f`
- Nền mục đang nổi: `#fff2e6`
- Ký tự kích hoạt nổi bật: `#ff5200`
- Bo góc trường & popup: `8px`; bo góc mục gợi ý: `6px`
- Khoảng đệm (vừa): `12px`; chiều cao mỗi mục gợi ý: `32px`

**Khả năng tiếp cận**
- Vai trò ARIA: ô nhập là `combobox`, popup là `listbox`, mỗi gợi ý là `option`.
- Dùng `aria-expanded` báo popup mở/đóng; `aria-activedescendant` trỏ tới mục đang nổi — focus luôn giữ ở textarea, không rời khỏi ô nhập.
- Mỗi trường cần nhãn liên kết qua `aria-labelledby`; nếu không có nhãn hiển thị, dùng `aria-label`.
- Số kết quả và trạng thái rỗng thông báo qua vùng `aria-live` lịch sự.
- Điều hướng bằng `↑` `↓` `Enter` `Esc`; không có bẫy focus.
- Không chỉ dựa vào màu sắc để báo mục active — cần kết hợp `aria-activedescendant`.
- Mỗi mục gợi ý cao tối thiểu 32px để dễ chạm trên thiết bị di động.

## Radio — Ổn định

Chọn duy nhất một mục trong nhóm các phương án loại trừ lẫn nhau.

`import { Radio } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi cần chọn đúng một phương án (phương thức giao hàng, hình thức thanh toán, ca lấy hàng).
- Dùng khi số phương án ít (2–5) và cần để lộ toàn bộ để người dùng so sánh trực tiếp.
- Dùng khi mỗi phương án cần nhãn đủ ý nghĩa, không nên giấu sau danh sách thả xuống.
- Dùng khi cần một lựa chọn mặc định rõ ràng ngay khi mở màn hình.
- KHÔNG dùng khi người dùng được phép chọn nhiều giá trị — dùng Checkbox thay thế.
- KHÔNG dùng khi danh sách phương án dài (trên 6–7 mục) — dùng Select để tiết kiệm không gian.
- KHÔNG dùng khi chỉ bật/tắt một trạng thái độc lập — dùng Switch.
- KHÔNG dùng khi cần kích hoạt một hành động ngay lập tức — dùng Button.

**Nên / Không nên**
- Nên chọn sẵn một phương án mặc định hợp lý ngay khi mở màn hình; không để cả nhóm trống mà không có lý do.
- Nên dùng Radio chỉ cho tình huống chọn một-loại-trừ; không dùng Radio cho tình huống chọn nhiều (phải dùng Checkbox).
- Nên xếp dọc khi nhãn dài; xếp ngang chỉ khi nhãn ngắn và số phương án ít, giữ khoảng cách 24px giữa các mục.
- Toàn bộ nhãn phải là vùng bấm được, không chỉ riêng chấm tròn.

**Biến thể, kích thước & trạng thái**
- **Radio chuẩn (dạng chấm):** biến thể mặc định, xếp dọc. Phù hợp form và danh sách nhãn dài.
- **Radio Button (dạng nút phân đoạn):** các phương án gắn liền thành một dải nút; mục đang chọn tô nền cam `#ff5200`. Phù hợp khi đổi nhanh giữa chế độ xem hoặc bộ lọc ngắn gọn.
- **Radio xếp ngang:** dùng khi nhãn ngắn và số phương án ít; khoảng cách tối thiểu 24px giữa các mục.
- **Radio kèm mô tả phụ:** văn bản phụ canh thẳng nhãn chính, dùng màu muted `#52525b`.
- **Kích thước Mặc định:** control 16px, chấm 8px, chữ 14px — dùng cho form thông thường.
- **Kích thước Lớn:** control 20px, chấm 10px, chữ 16px — dùng cho màn hình cảm ứng hoặc nội dung nhấn mạnh.
- **Trạng thái:** Chưa chọn (viền `#d4d4d8`) · Đã chọn (chấm cam `#ff5200`, viền cùng màu) · Hover (viền cam nhạt) · Focus (vòng sáng `#fff2e6`) · Vô hiệu chưa chọn · Vô hiệu đã chọn (làm mờ, giữ chấm cam).

**Design tokens**
- `var(--ghn-primary)` — `#ff5200` — chấm và viền control khi được chọn
- `var(--ghn-primary-hover)` — `#ff7429` — viền khi hover
- `var(--ghn-primary-active)` — `#d4490b` — màu nhấn khi đang bấm chọn
- `var(--ghn-soft)` — `#fff2e6` — vòng sáng focus quanh control
- `var(--ghn-on-primary)` — `#fff` — chữ trên nền cam (Radio Button đang chọn)
- `var(--ghn-border)` — `#d4d4d8` — viền control khi chưa chọn
- `var(--ghn-text)` — `#09090b` — màu chữ nhãn
- `var(--ghn-muted)` — `#52525b` — văn bản phụ trợ

**Khả năng tiếp cận**
- Các mục cùng nhóm gom trong `role="radiogroup"`; mỗi mục là `role="radio"` với `aria-checked` phản ánh trạng thái.
- Radiogroup cần tiêu đề mô tả qua `aria-labelledby` hoặc `aria-label`.
- Điều hướng bàn phím: `Tab` vào nhóm (tới mục đang chọn); `↑` `↓` `←` `→` di chuyển và chọn ngay; `Space` chọn mục đang focus.
- Vòng focus `#fff2e6` luôn hiển thị rõ, không bị tắt.
- Chấm chọn cam `#ff5200` trên nền trắng và nhãn `#09090b` đạt ngưỡng tương phản tối thiểu; không dùng riêng màu sắc để truyền tải trạng thái chọn.
- Vùng bấm tối thiểu 24px cho cỡ Mặc định, phủ trọn cả nhãn để thuận tiện cảm ứng.

## Rate — Kế thừa

Nhóm biểu tượng sao cho phép người dùng chấm điểm chất lượng (đơn hàng, shipper, dịch vụ) hoặc hiển thị điểm trung bình ở chế độ chỉ đọc.

```ts
import { Rate } from 'antd';
```

**Khi nào dùng / KHÔNG dùng**
- Dùng: thu thập đánh giá sau giao hàng thành công, chấm điểm shipper hoặc điểm giao/lấy hàng, hiển thị điểm trung bình (chỉ đọc) trong bảng quản trị, khi thang điểm ngắn (3–5 mức) mang ý nghĩa "mức độ hài lòng".
- Không dùng: nhập số liệu chính xác như khối lượng/kích thước/số tiền — dùng Input Number; thang điểm dài (0–100) hoặc cần độ phân giải cao — dùng Slider; lựa chọn loại trừ không có thứ bậc — dùng Radio; bật/tắt trạng thái — dùng Switch hoặc Checkbox.

**Nên / Không nên**
- Nên: kèm nhãn chữ (tooltips) cho từng mức để người dùng hiểu ý nghĩa điểm số.
- Nên: sao đã chọn dùng màu `warning` (#faad14), sao rỗng dùng màu `border` — tương phản rõ giữa hai phần.
- Nên: hiển thị điểm trung bình ở chế độ chỉ đọc (`disabled`) để tránh nhầm là có thể chỉnh.
- Không nên: dùng thang quá dài (10 sao) gây khó ước lượng; giữ trong 5 sao.
- Không nên: dùng sao chưa chọn màu quá nhạt — người dùng sẽ không thấy còn mức để chọn.
- Không nên: tô sao đã chọn bằng màu `primary` cam — màu đánh giá quy ước là `warning`, dùng `primary` dễ nhầm với nút hành động.

**Biến thể, kích thước & trạng thái**
- Biến thể: Cơ bản (nguyên sao, giá trị nguyên 1–5); Nửa sao (`allowHalf`, giá trị 0.5); Kèm chú thích chữ (`tooltips`); Chỉ đọc (`disabled`); Biểu tượng tùy biến (`character`); Một sao + điểm số (dạng compact cho không gian hẹp).
- Kích thước: Small (~16px, 4px gap — bảng dữ liệu/danh sách dày); Medium (~20px, 8px gap — mặc định, biểu mẫu thông thường); Large (~28px, 12px gap — màn hình điện thoại/điểm nhấn).
- Trạng thái: Rỗng (chưa chọn, giá trị 0); Hover (xem trước sao sáng lên theo vị trí con trỏ); Đã chọn; Tiêu điểm (viền focus màu primary, bo góc 8px); Chỉ đọc (disabled, opacity ~0.85).
- Khi bật cho phép xóa: nhấp lại vào sao đang ở giá trị hiện tại đặt điểm về 0.

**Design tokens**
- `var(--ghn-warning)` — màu sao đã chọn / hover (#faad14)
- `var(--ghn-border)` — màu sao chưa chọn (#d4d4d8)
- `var(--ghn-primary)` — viền focus và biểu tượng tùy biến nhấn mạnh (#ff5200)
- `var(--ghn-text)` — màu nhãn chữ mức điểm (#09090b)
- `var(--ghn-muted)` — màu chú thích phụ (số lượt đánh giá) (#52525b)
- Kích thước sao: 16px / 20px / 28px; khoảng cách sao: 4px / 8px / 12px; bo góc focus: 8px

**Khả năng tiếp cận**
- Nhóm sao mang vai trò ARIA `radiogroup`; mỗi sao là `radio` với `aria-checked` phản ánh trạng thái.
- Gắn `aria-label` mô tả mục đích nhóm (ví dụ "Đánh giá chất lượng giao hàng"); mỗi mức nên có nhãn giá trị như "1 sao — Rất tệ".
- Điều hướng bằng phím: `Tab` vào/ra nhóm; `←` `→` `↑` `↓` thay đổi điểm; `Enter`/`Space` xác nhận.
- Không dùng riêng màu để truyền tải điểm số — đi kèm số hoặc nhãn chữ để người khiếm thị màu vẫn hiểu.
- Vùng chạm mỗi sao tối thiểu 44×44px trên thiết bị cảm ứng.

## Select — Ổn định

Ô chọn giá trị từ danh sách thả xuống, hỗ trợ đơn trị, đa trị, tìm kiếm và phân nhóm.

`import { Select } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng khi danh sách có từ 6 phương án trở lên (ví dụ: tỉnh/thành, quận/huyện, bưu cục).
- Dùng khi cần tiết kiệm không gian trên biểu mẫu nhiều trường.
- Dùng khi cần chọn một hoặc nhiều giá trị từ cùng một tập dữ liệu.
- Dùng khi danh sách quá dài, cần tìm kiếm/lọc theo thời gian thực.
- KHÔNG dùng khi chỉ có 2–4 phương án cần so sánh trực quan — dùng Radio thay thế.
- KHÔNG dùng để bật/tắt một trạng thái duy nhất — dùng Switch hoặc Checkbox.
- KHÔNG dùng khi giá trị là văn bản tự do — dùng ô Input.
- KHÔNG dùng để chọn ngày tháng — dùng Date Picker.

**Nên / Không nên**

- Nên: Đặt placeholder mô tả rõ nội dung cần chọn (ví dụ "Chọn tỉnh / thành"), không dùng placeholder mơ hồ như "Chọn…".
- Nên: Với 2–3 phương án cần so sánh, dùng Radio thay Select để mọi lựa chọn hiển thị sẵn.
- Nên: Dùng nhãn tùy chọn ngắn gọn, dễ phân biệt; có thể thêm icon hỗ trợ để quét danh sách nhanh hơn.
- Không nên: Nhồi 2 phương án vào Select — buộc người dùng thao tác thừa để thấy danh sách rất ngắn.
- Không nên: Dùng nhãn tùy chọn quá dài, dễ bị cắt cụt, khó so sánh và phá vỡ bố cục menu.
- Không nên: Dùng riêng màu sắc để báo trạng thái lỗi — luôn kèm icon hoặc văn bản giải thích.
- Không nên: Dùng placeholder thay thế nhãn (label) vì placeholder biến mất khi đã có giá trị.

**Biến thể, kích thước & trạng thái**

Biến thể:
- Đơn trị (single): chọn một giá trị, menu tự đóng sau khi chọn.
- Đa trị (multiple): chọn nhiều giá trị thành chip có nút gỡ, menu giữ mở để tiếp tục thêm.
- Có tìm kiếm (searchable): gõ để lọc tùy chọn theo thời gian thực; dùng cho danh sách dài.
- Phân nhóm (grouped): gom tùy chọn theo nhóm với tiêu đề mờ không chọn được.

Kích thước:
- Nhỏ (sm): cao 32px, padding ngang 8px, chữ 13px — dùng cho bảng dữ liệu dày, không gian hẹp.
- Mặc định (md): cao 40px, padding ngang 12px, chữ 14px — biểu mẫu tiêu chuẩn.
- Lớn (lg): cao 48px, padding ngang 16px, chữ 16px — trang trọng tâm, thiết bị cảm ứng.

Trạng thái: Mặc định · Di chuột (hover) · Mở/lấy nét (focus, viền primary + vòng sáng soft cam) · Lỗi (error, viền đỏ + dòng chú thích bắt buộc) · Vô hiệu hóa (disabled, nền bg-subtle, opacity 0.6) · Đang tải (loading, spinner thay mũi tên).

**Design tokens**

- `var(--ghn-primary)` (#ff5200) — viền focus, chip giá trị, dấu chọn trong menu.
- `var(--ghn-soft)` (#fff2e6) — nền chip, nền mục đang chọn, vòng sáng tiêu điểm.
- `var(--ghn-text)` (#09090b) — nhãn giá trị đã chọn và mục trong menu.
- `var(--ghn-muted)` (#52525b) — tiêu đề nhóm, mũi tên ở trạng thái nghỉ.
- `var(--ghn-placeholder)` (#71717a) — văn bản gợi ý khi chưa chọn.
- `var(--ghn-border)` (#d4d4d8) — viền ô và viền menu mặc định.
- `var(--ghn-bg-subtle)` (#fafafa) — nền ô khi disabled.
- `var(--ghn-error)` (#ff4d4f) — viền và icon khi lỗi.
- Bo góc ô/menu: 8px; bo góc chip: 6px; khoảng cách trong: 8px · 12px; font: Inter; giãn ký tự: 0.1px.

**Khả năng tiếp cận**

- Ô điều khiển dùng vai trò `combobox` với `aria-expanded` phản ánh trạng thái đóng/mở.
- Menu dùng vai trò `listbox`, mỗi tùy chọn là `option` với `aria-selected`.
- `aria-activedescendant` chỉ tới mục đang được làm nổi để trình đọc màn hình đọc đúng.
- Ô lỗi gắn `aria-invalid` và liên kết dòng lỗi qua `aria-describedby`.
- Mỗi Select phải có nhãn liên kết qua `aria-labelledby` hoặc label của trường — placeholder không thay thế nhãn.
- Điều hướng bàn phím: Tab (tới/rời ô), Enter/Space (mở menu/chọn), ↑↓ (duyệt mục), Esc (đóng menu), Backspace (gỡ chip cuối ở đa trị).
- Vùng chạm tối thiểu 40px chiều cao cho di động.
- Không dùng riêng màu để báo lỗi — luôn kèm icon hoặc văn bản bổ sung.
- Chuyển động (150–200ms) tự tắt khi người dùng bật tùy chọn giảm chuyển động của hệ điều hành.

## Slider — Kế thừa

Thanh trượt cho phép người dùng chọn một giá trị hoặc một khoảng giá trị bằng cách kéo tay nắm dọc theo đường ray liên tục.

`import { Slider } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: lọc theo khoảng (khối lượng đơn, phí giao, khoảng cách giao hàng); chọn ngưỡng liên tục (độ thu phóng bản đồ, mức cảnh báo tồn kho); khi vị trí tương đối quan trọng hơn con số tuyệt đối; chọn khoảng min–max bằng dạng range hai tay nắm; điều chỉnh nhanh với xem trước tức thì.
- KHÔNG dùng: cần nhập số chính xác (số tiền, mã, số lượng) — dùng Input Number; dải quá rộng (ví dụ 1–1.000.000) khiến mỗi bước kéo nhảy quá lớn; chỉ có hai trạng thái bật/tắt — dùng Switch; lựa chọn rời rạc ít phương án — dùng Radio hoặc Segmented; chọn nhiều hạng mục độc lập — dùng Checkbox.

**Nên / Không nên**
- Nên: hiển thị nhãn dải và giá trị đang chọn để người dùng biết chính xác đang lọc khoảng nào; khi cần con số chính xác, ghép Slider với một ô Input Number đồng bộ hai chiều; dùng đúng màu thương hiệu `#ff5200` cho đoạn đã chọn và viền tay nắm.
- Không nên: để Slider không nhãn, không giá trị — người dùng phải đoán bằng mắt và không biết đơn vị; dùng Slider cho dải quá rộng (0–1.000.000) để nhập số tiền chính xác; tự ý đổi đoạn fill sang màu khác (ví dụ xanh liên kết `#006fad`) — phá vỡ nhận diện thương hiệu.

**Biến thể, kích thước & trạng thái**
- Biến thể: Đơn (một tay nắm), Đôi/range (hai tay nắm, fill nằm giữa), Có mốc/marks (điểm dừng có nhãn), Dọc/vertical (đường ray theo chiều dọc).
- Kích thước: Small (ray 4px, tay nắm 14px — dùng trong bảng, panel lọc dày, form gọn); Default (ray 6px, tay nắm 18px — mặc định cho phần lớn trường hợp).
- Trạng thái: Mặc định (viền tay nắm và fill màu `#ff5200`); Hover (quầng sáng `#fff2e6`, viền `#ff7429`); Focus bàn phím (vòng focus rõ ràng quanh tay nắm); Vô hiệu (toàn bộ chuyển xám, con trỏ không cho phép, không kéo được — vẫn cần đủ tương phản để đọc giá trị hiện tại).

**Design tokens**
- `var(--ghn-primary)` — màu đoạn đã chọn và viền tay nắm (`#ff5200`)
- `var(--ghn-primary-hover)` — viền tay nắm khi hover (`#ff7429`)
- `var(--ghn-primary-soft)` — quầng sáng quanh tay nắm khi hover (`#fff2e6`)
- `var(--ghn-border)` — màu đường ray nền và viền khi vô hiệu (`#d4d4d8`)
- `var(--ghn-bg-subtle)` — nền tay nắm khi vô hiệu (`#fafafa`)
- `var(--ghn-text)` — nền tooltip giá trị (`#09090b`)
- `var(--ghn-text-muted)` — màu nhãn dải và mốc (`#52525b`)
- `var(--ghn-r-tag)` — bo góc tooltip giá trị (`6px`); ray và fill luôn pill (`9999px`)

**Khả năng tiếp cận**
- Mỗi tay nắm dùng `role="slider"` với `aria-valuemin`, `aria-valuemax`, `aria-valuenow` đầy đủ.
- Khi giá trị nên đọc thành chữ, dùng `aria-valuetext` (ví dụ "60.000 đồng").
- Gắn nhãn rõ qua `aria-label` hoặc `aria-labelledby`; với range, đặt nhãn riêng cho cận dưới và cận trên.
- Slider dọc khai báo thêm `aria-orientation="vertical"`.
- Điều hướng bàn phím: `Tab` để focus, `←`/`→`/`↑`/`↓` tinh chỉnh từng bước, `Home`/`End` nhảy tới hai cực, `Page Up`/`Page Down` nhảy bước lớn; range cho phép `Tab` giữa hai tay nắm.
- Không chỉ dựa vào màu: tay nắm có hình dạng và viền riêng, luôn hiển thị giá trị bằng số (tooltip hoặc nhãn).
- Tôn trọng tùy chọn "giảm chuyển động" của hệ điều hành: tắt hiệu ứng trượt nếu người dùng yêu cầu.

## Switch — Ổn định

Điều khiển bật/tắt tức thì cho một tùy chọn nhị phân, áp dụng thay đổi ngay khi người dùng gạt mà không cần nút xác nhận.

`import { Switch } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: bật/tắt một thiết lập áp dụng tức thời (ví dụ: "Nhận thông báo đơn hàng", kích hoạt giao hàng nhanh, công khai/riêng tư).
- Dùng: khi giá trị mặc định rõ ràng và người dùng chỉ cần một thao tác để đổi.
- KHÔNG dùng: khi lựa chọn chỉ có hiệu lực sau khi bấm Lưu/Gửi — hãy dùng Checkbox.
- KHÔNG dùng: để chọn nhiều mục trong nhóm — hãy dùng nhóm Checkbox.
- KHÔNG dùng: khi có ba phương án trở lên — hãy dùng Radio hoặc Select.
- KHÔNG dùng: cho hành động nguy hiểm hoặc không thể hoàn tác cần bước xác nhận riêng.

**Nên / Không nên**
- Nên: dùng nhãn ngắn gọn mô tả rõ tính năng được bật (ví dụ: "Bật giao hàng nhanh"). Switch luôn phải có ngữ cảnh nhãn đi kèm — không để Switch đứng một mình.
- Không nên: dùng nhãn "Bật/Tắt" trùng lặp chức năng của Switch; nhãn phải nói về tính năng, không lặp lại trạng thái.
- Nên: hiển thị spinner (trạng thái loading) trên núm khi thao tác cần gọi API.
- Không nên: đặt Switch trong biểu mẫu cần bấm nút Lưu mới áp dụng — dùng Checkbox thay thế.
- Không nên: xếp nhiều Switch loại trừ nhau để chọn một trong nhiều phương án — dùng Radio.
- Không nên: dùng icon trạng thái bên trong rãnh khi không thực sự cần, tránh làm rối giao diện.

**Biến thể, kích thước & trạng thái**
- Biến thể: Bật (rãnh cam `#ff5200`, núm phải), Tắt (rãnh xám `#d4d4d8`, núm trái), có icon trạng thái trong rãnh (check/xmark), kèm nhãn văn bản bên ngoài, đang xử lý (spinner trên núm).
- Kích thước: Mặc định (cao 22px, rộng tối thiểu 44px, núm 18px) — dùng cho biểu mẫu và trang cài đặt; Nhỏ (cao 16px, rộng 28px, núm 12px) — dùng trong bảng dữ liệu dày đặc.
- Trạng thái: Tắt, Bật, Focus bàn phím (vòng sáng cam nhạt), Vô hiệu/disabled (opacity 45%, con trỏ not-allowed), Đang xử lý/loading (spinner, khóa tương tác).
- Chuyển động: núm trượt ngang ease ~200ms; tôn trọng `prefers-reduced-motion`.

**Design tokens**
- `#ff5200` — màu rãnh khi bật (primary)
- `#ff7429` — màu rãnh hover khi đang bật
- `#d4490b` — màu rãnh active khi đang bật
- `#d4d4d8` — màu rãnh khi tắt (neutral)
- `#fff` — màu núm tròn và icon trên nền bật
- `#fff2e6` — vòng focus quanh rãnh khi nhận tiêu điểm bàn phím (`var(--ghn-soft)`)
- `9999px` — bo góc pill hoàn toàn
- `22px` / `16px` — chiều cao rãnh mặc định / nhỏ
- `12px` — khoảng cách giữa Switch và nhãn đi kèm
- `45%` — opacity khi disabled

**Khả năng tiếp cận**
- Phần tử dùng `role="switch"` và `aria-checked="true/false"` để trình đọc màn hình công bố đúng trạng thái.
- Trạng thái vô hiệu dùng `aria-disabled="true"`.
- Mỗi Switch phải có nhãn liên kết qua `aria-label` hoặc `aria-labelledby`; nhãn mô tả tính năng, không chỉ "Bật/Tắt".
- Điều hướng bàn phím: `Tab` để tới Switch, `Space` để đảo trạng thái; tiêu điểm focus phải luôn hiển thị vòng sáng rõ ràng.
- Không dùng riêng màu sắc để truyền đạt trạng thái — vị trí núm là tín hiệu chính.
- Vùng chạm tối thiểu 24px chiều cao (đặc biệt quan trọng trên cảm ứng); mở rộng vùng nhấn ra cả nhãn đi kèm.

## Time Picker — Kế thừa

Ô nhập cho phép người dùng chọn một mốc thời gian (giờ, phút, giây) thông qua các cột cuộn thay vì gõ tay.

`import { TimePicker } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: chọn giờ hẹn lấy hàng, giờ giao trong khung làm việc, đặt giờ nhắc/bắt đầu ca/lịch chạy tự động, khi cần độ chính xác tới phút hoặc giây với định dạng cố định.
- KHÔNG dùng: chọn khoảng thời gian từ–đến (dùng Time Range Picker); nhập thời lượng như 90 phút (dùng ô số với đơn vị); chọn ngày kèm giờ liền mạch (dùng Date Picker có `showTime`).

**Nên / Không nên**
- Nên: hiển thị placeholder mô tả định dạng, ví dụ "Chọn giờ (HH:mm)"; giới hạn giờ chọn được khi có ràng buộc nghiệp vụ (chỉ trong giờ làm việc); ẩn cột giây nếu chỉ cần độ chính xác tới phút.
- Không nên: bắt người dùng cuộn qua quá nhiều giá trị không liên quan mà không có bước nhảy; trộn lẫn định dạng 12h và 24h trong cùng một biểu mẫu; đặt ô quá hẹp khiến giá trị giờ bị cắt chữ.

**Biến thể, kích thước & trạng thái**
- Biến thể: giờ:phút (ẩn cột giây), định dạng 12 giờ (AM/PM), bước nhảy phút tùy chỉnh (ví dụ step 15').
- Kích thước: `small` / `middle` (mặc định) / `large` — đồng bộ mật độ với biểu mẫu xung quanh.
- Trạng thái: mặc định, hover (viền cam nhạt), focus (viền cam + vầng `--ghn-primary-soft`), lỗi (viền đỏ + icon đỏ), đã chọn có nút xóa, vô hiệu hóa (nền xám, con trỏ not-allowed).

**Design tokens**
- `--ghn-primary` (#ff5200) — nền giá trị đang chọn và nút OK.
- `--ghn-primary-soft` (#fff2e6) — vầng focus quanh ô nhập.
- `--ghn-primary-hover` (#ff7429) — viền và mục khi hover.
- `--ghn-link` (#006fad) — liên kết "Bây giờ".
- `--ghn-text` (#09090b) — giá trị giờ và chữ chính.
- `--ghn-muted` (#52525b) — placeholder và biểu tượng đồng hồ.
- `--ghn-border` (#d4d4d8) — viền ô nhập và panel.
- `--ghn-subtle` (#fafafa) — đường chia cột và nền vô hiệu hóa.
- `--ghn-error` (#ff4d4f) — viền và biểu tượng trạng thái lỗi.
- `--ghn-r-default` (8px) — bo góc ô nhập, panel và mục chọn.
- `--ghn-s8` / `--ghn-s12` — padding dọc và ngang của ô nhập.

**Khả năng tiếp cận**
- Ô nhập nhận tiêu điểm bằng `Tab`; nhấn `Enter` hoặc `Space` để mở panel.
- Trong panel: `↑` `↓` để di chuyển trong cột, `Tab` để chuyển giữa các cột.
- `Enter` xác nhận giá trị, `Esc` đóng panel mà không thay đổi.
- Nút chỉ-icon (xóa, đồng hồ) có `aria-label` rõ ràng; trạng thái lỗi thông báo qua `aria-invalid`.
- Giá trị đang chọn dùng cả màu nền cam lẫn `aria-current`, không chỉ dựa vào màu sắc.

## Transfer — Kế thừa

Chuyển mục giữa hai danh sách nguồn–đích, phù hợp khi cần phân loại hoặc chọn nhiều mục từ một tập lớn và muốn đối chiếu trực quan "chưa chọn" vs "đã chọn".

`import { Transfer } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi phân quyền cho người dùng (chọn nhiều quyền từ danh sách tổng).
- Dùng khi gán nhiều phường/xã, kho hàng hoặc tuyến giao cho một nhóm.
- Dùng khi cần đối chiếu trực quan giữa "chưa chọn" và "đã chọn".
- Dùng với tập dữ liệu trung bình tới lớn cần lọc và chọn theo lô.
- KHÔNG dùng khi chỉ chọn một mục — dùng Select hoặc Radio.
- KHÔNG dùng khi danh sách rất ngắn (dưới 5 mục) — dùng Checkbox group.
- KHÔNG dùng trên màn hình rất hẹp không đủ chỗ cho hai cột song song.
- KHÔNG dùng khi không cần đối chiếu, chỉ cần chọn nhanh — dùng Multi-select.

**Nên / Không nên**
- Nên: Đặt tiêu đề rõ ràng cho hai cột (ví dụ "Chưa gán" và "Đã gán").
- Nên: Bật ô tìm kiếm khi danh sách vượt quá khoảng 10 mục.
- Nên: Hiển thị số lượng "x/y" để người dùng biết tiến độ chọn.
- Nên: Cho phép chọn tất cả qua checkbox tiêu đề để thao tác theo lô.
- Không nên: Dùng nhãn cột mơ hồ khiến người dùng không biết hướng di chuyển.
- Không nên: Để cột quá hẹp làm nhãn mục bị cắt cụt.
- Không nên: Bật nút mũi tên khi chưa có mục nào được chọn.
- Không nên: Đặt quá nhiều mục không tìm kiếm được, buộc cuộn thủ công.

**Biến thể, kích thước & trạng thái**
- Biến thể: Cơ bản (Basic), Có tìm kiếm (Searchable), Một chiều (One-way, prop `oneWay`), Render tùy biến (Custom render). Có thể kết hợp Table Transfer khi cần nhiều cột thông tin.
- Kích thước: chiều cao danh sách mặc định 340px (cuộn), hai cột chia đều trong vùng chứa (max 720px), chiều cao dòng item tối thiểu `var(--ghn-s32)`.
- Trạng thái item: Mặc định, Đã chọn (nền `--ghn-primary-soft`, viền `--ghn-primary`), Vô hiệu (`aria-disabled`, opacity 0.6), Rỗng (icon inbox + văn bản).
- Responsive: dưới 900px hai cột xếp dọc, nút mũi tên chuyển sang hướng lên/xuống và chiếm toàn bộ chiều rộng.

**Design tokens**
- `--ghn-primary` — nền nút mũi tên đang bật.
- `--ghn-primary-soft` — nền mục đang được chọn.
- `--ghn-primary-hover` — trạng thái hover của nút mũi tên.
- `--ghn-text` — màu nhãn mục và tiêu đề cột.
- `--ghn-muted` — văn bản phụ, placeholder tìm kiếm.
- `--ghn-border` — viền cột, viền ô tìm kiếm và nút.
- `--ghn-subtle` — nền tiêu đề cột và trạng thái vô hiệu.
- `--ghn-r-default` — bo góc cột, ô tìm kiếm và nút (8px).
- `--ghn-s8 / --ghn-s12 / --ghn-s16` — khoảng đệm dòng, padding cột và khoảng cách cụm nút.

**Khả năng tiếp cận**
- Mọi phần tử tương tác là `<button>` hoặc `<input>` thực, focus được bằng Tab.
- Nút chỉ-icon có `aria-label` mô tả hướng di chuyển (ví dụ "Chuyển sang phải").
- Space để chọn mục, Enter để kích hoạt nút đang focus.
- Số lượng "x/y mục" và nhãn cột được công nghệ hỗ trợ đọc để xác định ngữ cảnh.
- Focus ring hiển thị rõ với độ tương phản đạt chuẩn WCAG AA.
- Trạng thái vô hiệu dùng `aria-disabled` để ngăn thao tác và thông báo cho trình đọc màn hình.

## TreeSelect — Kế thừa

Ô chọn dạng dropdown hiển thị dữ liệu phân cấp cha–con, dùng khi cần chọn từ cấu trúc cây nhiều tầng.

`import { TreeSelect } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi dữ liệu có cấu trúc phân cấp nhiều tầng: khu vực → tỉnh/thành → quận/huyện → phường/xã.
- Dùng khi cần chọn cả node cha (kéo theo con) lẫn node lá riêng lẻ.
- Dùng cho phân nhóm kho, bưu cục, vùng vận chuyển theo cây tổ chức, hoặc danh mục hàng hóa lồng nhau.
- KHÔNG dùng cho danh sách phẳng, không phân cấp — dùng Select thay thế.
- KHÔNG dùng khi chỉ có 2–3 lựa chọn cố định — dùng Radio hoặc Segmented.
- KHÔNG dùng khi cần xem/chỉnh toàn bộ cây cùng lúc — dùng Tree độc lập.
- KHÔNG dùng để chọn ngày/giờ hoặc dải số — dùng DatePicker, InputNumber.

**Nên / Không nên**
- Nên tách rõ vùng bung nhánh (mũi tên) và vùng chọn node (nhãn) để tránh chọn nhầm khi chỉ muốn xem nhánh con.
- Không nên gộp bung và chọn vào cùng một vùng nhấp.
- Nên dùng trạng thái nửa chọn (dấu trừ) ở node cha khi chỉ một phần con được tích.
- Không nên để node cha hiện đã tích đầy đủ khi thực tế chỉ một vài node con được chọn.
- Nên cho phép tìm kiếm và tự bung nhánh chứa kết quả khi cây có nhiều tầng.
- Không nên buộc người dùng bung tay từng tầng để tìm node sâu trong cây lớn mà không có ô tìm kiếm.

**Biến thể, kích thước & trạng thái**
- Biến thể: **Đơn trị** (chọn một node, hiển thị văn bản) / **Đa trị** (chọn nhiều node, hiển thị chip có nút xóa).
- Chế độ chọn cha: tích node cha tự động tích toàn bộ con; hỗ trợ trạng thái nửa chọn (indeterminate).
- Có ô tìm kiếm: lọc node theo tên, làm nổi bật đoạn khớp, tự bung nhánh chứa kết quả.
- Kích thước ô kích hoạt: **sm** 32px / **md** 40px (mặc định) / **lg** 48px.
- Chiều cao mỗi dòng node: 36px; thụt lề mỗi tầng con: 24px.
- Trạng thái ô: mặc định (placeholder), mở/focus (viền cam), có giá trị (hiện nút xóa nhanh khi hover), lỗi (viền đỏ), vô hiệu (nền xám), đang tải lazy load.
- Trạng thái node: mặc định, hover, được chọn (nền cam nhạt + check), nửa chọn (dấu trừ), vô hiệu (mờ).

**Design tokens**
- Chữ node mặc định: `#09090b`; node vô hiệu/mô tả phụ: `#52525b`; placeholder: `#71717a`
- Node được chọn — chữ: `#ff5200`; nền: `#fff2e6`
- Viền ô: `#d4d4d8`; viền focus: `#ff5200`; vòng focus: `#fff2e6`
- Nền panel: `#ffffff`; nền hover node: `#fafafa`; màu lỗi: `#ff4d4f`; nền ô vô hiệu: `#fafafa`
- Bo góc ô & panel: `8px`; bo góc chip: `6px`
- Chiều cao node: `36px`; thụt lề mỗi tầng: `24px`; padding ngang ô (md): `12px`
- Phông chữ: Inter; letter-spacing: `0.1px`

**Khả năng tiếp cận**
- Panel dùng `role=tree`; mỗi node dùng `role=treeitem`; nhóm con dùng `role=group`.
- Node cha công bố `aria-expanded` (true/false); node chọn dùng `aria-selected=true`; đa trị dùng `aria-checked` với checkbox.
- Cấp bậc công bố qua `aria-level`; ô kích hoạt liên kết nhãn qua `aria-labelledby` và panel qua `aria-controls`.
- Lỗi dùng `aria-invalid=true` + `aria-describedby`.
- Điều hướng bàn phím đầy đủ: Arrow keys (di chuyển/bung/thu), Enter/Space (chọn), Esc (đóng panel).
- Không dùng riêng màu sắc để truyền đạt trạng thái; mọi node/chip/icon đều có nhãn văn bản.
- Tương phản chữ node và node được chọn đều đạt ngưỡng AA.
- Tôn trọng tùy chọn `prefers-reduced-motion` của hệ điều hành.

## Upload — Kế thừa

Cho phép người dùng chọn, kéo-thả và tải tệp lên hệ thống, kèm phản hồi tiến trình và trạng thái rõ ràng cho từng tệp.

`import { Upload } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: đính kèm ảnh bằng chứng giao hàng (POD), chữ ký, ảnh kiện hàng
- Dùng: tải lên tệp Excel/CSV để nhập đơn hàng hàng loạt
- Dùng: gửi chứng từ xác minh (căn cước, giấy phép kinh doanh, hợp đồng)
- Dùng: đính kèm tài liệu vào phiếu hỗ trợ hoặc khiếu nại
- KHÔNG dùng: nhập đoạn văn bản ngắn — dùng trường nhập liệu thay thế
- KHÔNG dùng: chọn từ thư viện ảnh có sẵn trên hệ thống — dùng picker chuyên dụng
- KHÔNG dùng: chụp ảnh trực tiếp theo luồng camera nghiệp vụ — dùng luồng quét chuyên biệt
- KHÔNG dùng: liên kết tới tệp đã có trên đám mây — dùng trường dán liên kết

**Nên / Không nên**
- Nên: nêu rõ định dạng và dung lượng tối đa *trước* khi người dùng chọn tệp (không phải sau khi lỗi)
- Nên: cho phép thử lại ngay tại tệp bị lỗi mà không phải chọn lại từ đầu — hiển thị nút "Thử lại" kèm tên tệp và lý do lỗi
- Nên: luôn để nút xóa cạnh từng tệp để người dùng tự gỡ tệp chọn nhầm
- Không nên: để người dùng chọn tệp rồi mới báo lỗi định dạng/dung lượng sau khi đã chờ
- Không nên: chỉ báo lỗi chung chung mà không nói rõ tệp nào hỏng và vì sao
- Không nên: ẩn nút xóa sau menu phụ hoặc chỉ hiện khi rê chuột (khiến chạm và bàn phím khó tiếp cận)

**Biến thể, kích thước & trạng thái**
- *Nút tải lên*: biến thể gọn nhất, mở hộp thoại chọn tệp, danh sách tệp hiển thị bên dưới nút — dùng khi không gian hẹp hoặc tải tệp là thao tác phụ
- *Vùng kéo-thả*: khung viền đứt rộng, nhận tệp bằng kéo thả hoặc bấm để mở hộp thoại — dùng khi tải tệp là hành động trọng tâm hoặc cần nhiều tệp cùng lúc
- *Lưới ảnh xem trước*: ô thu nhỏ kèm ô "thêm" — dùng cho ảnh POD, ảnh kiện hàng cần xem nhanh
- *Danh sách tệp*: hàng ngang với tên, trạng thái, nút xóa — chuẩn cho tài liệu (không phải ảnh)
- Trạng thái tệp: Chờ tải → Đang tải (kèm phần trăm) → Thành công → Lỗi (kèm lý do + nút thử lại)
- Trạng thái điểm kích hoạt: Kéo qua (vùng sáng lên, viền đổi sang primary) → Vô hiệu
- Kích thước: hàng tệp cao tối thiểu 48px, đệm 12px; vùng kéo-thả đệm 24–32px, bo góc 8px; thanh tiến trình cao 4px; ô ảnh xem trước 72×72px

**Design tokens**
- `var(--ghn-primary)` — icon tải lên, viền vùng nhận khi kéo qua, ô "thêm" (`#ff5200`)
- `var(--ghn-soft)` / nền nhấn nhạt — nền vùng kéo-thả khi đang kéo tệp qua (`#fff2e6`)
- `var(--ghn-secondary)` — icon loại tệp, nút thử lại (`#006fad`)
- `var(--ghn-text)` — tên tệp, lời mời gọi (`#09090b`)
- `var(--ghn-muted)` — icon trung tính, nút xóa ở trạng thái nghỉ (`#52525b`)
- `var(--ghn-placeholder)` — văn bản gợi ý định dạng và dung lượng (`#71717a`)
- `var(--ghn-border)` — viền đứt vùng kéo-thả, viền hàng tệp (`#d4d4d8`)
- `var(--ghn-bg-subtle)` — nền vùng kéo-thả ở trạng thái nghỉ (`#fafafa`)
- `var(--ghn-success)` — icon và nhãn tải lên hoàn tất (`#52c41a`)
- `var(--ghn-error)` — icon, viền và thông báo tệp tải lỗi (`#ff4d4f`)

**Khả năng tiếp cận**
- Luôn bọc quanh `<input type="file">` thật — không thay thế bằng phần tử không tiếp cận được
- Mỗi input gắn nhãn rõ nghĩa (ví dụ "Tải lên ảnh bằng chứng giao hàng"), không chỉ "Chọn tệp"
- Gợi ý định dạng và dung lượng liên kết với input qua mô tả trợ giúp để trình đọc màn hình đọc cùng
- Tiến trình công bố qua live region lịch sự; trạng thái thành công/lỗi công bố bằng lời kèm tên tệp — không chỉ đổi màu
- Nút xóa có nhãn riêng theo tệp: "Xóa tệp bang-ke.xlsx" thay vì chỉ "Xóa"
- Vùng kéo-thả có vai trò và mô tả ARIA; toàn bộ luồng (chọn, xóa, thử lại) thực hiện được bằng Tab, Enter và Space
- Thông báo lỗi không chỉ dựa vào màu `--ghn-error`: luôn kèm biểu tượng và chữ mô tả lý do


# Hiển thị dữ liệu

## Avatar — Ổn định

Đại diện người dùng, tổ chức hoặc thực thể bằng ảnh, chữ cái viết tắt hoặc icon.

`import { Avatar } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng để đại diện cho người dùng, shipper, khách hàng, cộng tác viên trong danh sách và hồ sơ.
- Dùng để hiển thị logo cửa hàng hoặc thương hiệu đối tác trong danh sách shop.
- Dùng kèm tin nhắn, bình luận, nhật ký hoạt động để biết ai thực hiện.
- Dùng xếp chồng thành nhóm (Avatar.Group) khi muốn thể hiện nhiều người trong không gian hẹp.
- KHÔNG dùng làm biểu tượng minh hoạ chung chung không gắn với thực thể — dùng Icon.
- KHÔNG dùng thay cho huy hiệu trạng thái như "đang giao", "đã huỷ" — dùng Tag.
- KHÔNG phóng to làm ảnh banner hay hình minh hoạ lớn trong trang.
- KHÔNG nhồi nhiều thông tin (số, biểu tượng phụ) chồng lên Avatar nhỏ.

**Nên / Không nên**
- Nên đặt Avatar đi kèm tên ở những nơi quan trọng để tránh nhầm lẫn.
- Nên giữ chung một hình dạng và kích thước cho mọi Avatar trong cùng một hàng/nhóm.
- Nên giới hạn tối đa 3–5 Avatar hiển thị trong nhóm, phần dư gom vào "+N".
- Không nên dựa hoàn toàn vào Avatar không tên — các đối tượng cùng chữ cái trở nên khó phân biệt.
- Không nên trộn lẫn hình tròn với hình vuông, hay nhiều kích thước khác nhau trong cùng một nhóm.

**Biến thể, kích thước & trạng thái**
- Biến thể nội dung: **ảnh đại diện** (ảnh được cắt khít theo viền), **chữ cái viết tắt** (tối đa 2 ký tự, nền màu đặc, font Inter đậm), **biểu tượng** (icon người dùng trên nền nhạt, dùng cho thực thể vô danh).
- Hình dạng: **tròn** (border-radius 999px, mặc định cho cá nhân) và **vuông bo góc 8px** (dùng cho thương hiệu, cửa hàng, logo).
- Kích thước: **sm** 24px (bảng mật độ cao, nhóm xếp chồng), **md** 32px (mặc định, hầu hết trường hợp), **lg** 48px (trang hồ sơ, tiêu đề cuộc trò chuyện). Khi cần lớn hơn, nhân theo bội số 8 (64px…).
- Trạng thái: có ảnh, dự phòng chữ viết tắt, dự phòng biểu tượng, đang tải (skeleton), focus (vòng focus 2px offset), vô hiệu (opacity giảm).
- Nhóm xếp chồng: viền trắng 2px giữa các lớp; Avatar cuối dạng "+N"; vùng chạm tối thiểu 44×44px kể cả khi Avatar nhỏ (sm).

**Design tokens**
- `--ghn-primary` — nền Avatar chữ cái viết tắt mặc định.
- `--ghn-on-primary` — màu chữ/biểu tượng trên nền primary.
- `--ghn-soft` — nền nhạt cho Avatar biểu tượng dạng nhẹ.
- `--ghn-secondary` — nền Avatar thương hiệu, logo, nhóm hai.
- `--ghn-bg-subtle` — nền lúc đang tải ảnh / skeleton.
- `--ghn-muted` — màu biểu tượng giữ chỗ khi đang tải.
- `--ghn-placeholder` — màu chữ/biểu tượng trạng thái vô hiệu và đang tải.
- `--ghn-border` — viền mảnh khi tách Avatar khỏi nền cùng tông.
- `--ghn-white` — viền tách lớp giữa các Avatar trong nhóm xếp chồng.
- Bo góc vuông: `8px`; bo tròn: `999px`; lưới kích thước: bội số `4px`.
- Phông: Inter, letter-spacing 0.1px cho chữ viết tắt.

**Khả năng tiếp cận**
- Avatar dạng ảnh phải có `alt` mô tả đối tượng (ví dụ "Ảnh đại diện của Nguyễn An"); không để alt trống ở nơi mang thông tin.
- Avatar chỉ lặp lại tên đã hiển thị kế bên → đánh dấu là trang trí (`aria-hidden`) để trình đọc màn hình không đọc trùng.
- Nhóm xếp chồng: cung cấp nhãn tổng hợp như "3 thành viên và 5 người khác" cho cả nhóm.
- Avatar tương tác (nút): phải có nhãn ARIA rõ ràng, nhận focus theo thứ tự Tab tự nhiên, kích hoạt bằng `Enter` hoặc `Space`.
- Tương phản chữ/biểu tượng tối thiểu 4.5:1 so với nền. Cặp `--ghn-primary` / `--ghn-on-primary` đáp ứng yêu cầu này.
- Không dùng riêng màu nền Avatar để truyền trạng thái — kết hợp thêm nhãn văn bản hoặc biểu tượng.

## Badge — Kế thừa

Chỉ báo nhỏ (chấm hoặc số đếm) gắn lên phần tử khác để báo trạng thái, số lượng chưa xử lý hoặc sự kiện cần chú ý, mà không chiếm thêm không gian bố cục.

`import { Badge } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng khi báo số lượng chưa xử lý: thông báo chưa đọc, sản phẩm trong giỏ, đơn hàng chờ duyệt.
- Dùng khi báo "có cái mới" mà không cần con số — dùng dạng chấm (dot) trên biểu tượng.
- Dùng khi hiển thị trạng thái sống kèm nhãn: đang giao, hoàn tất, đã hủy.
- Dùng để đánh dấu trạng thái online/offline trên avatar người dùng hoặc shipper.
- KHÔNG dùng khi thông tin cần mô tả dài hoặc có hành động đi kèm — dùng Tag hoặc Alert thay thế.
- KHÔNG dùng để hiển thị nhãn phân loại độc lập không bám vào phần tử nào — dùng Tag.
- KHÔNG dùng để cảnh báo lỗi hệ thống hoặc thông báo toàn trang — dùng Alert hoặc Notification.
- KHÔNG dùng khi cần hiển thị số liệu thống kê lớn cần đọc chính xác — đặt trong bảng hoặc thẻ thống kê.

**Nên / Không nên**

- Nên dùng màu đỏ lỗi `#ff4d4f` cho Badge đếm chưa xử lý và neo gọn ở góc trên bên phải.
- Không nên dùng màu thương hiệu cam cho Badge đếm — dễ nhầm với nút hành động và làm loãng tín hiệu.
- Nên rút gọn số lớn về dạng tràn `99+` để Badge luôn gọn và dễ đọc.
- Không nên để nguyên giá trị số lớn (ví dụ: 1284) tràn dài, làm vỡ bố cục và che mất biểu tượng chủ.
- Badge phải nhỏ hơn và phụ thuộc vào phần tử chủ — không để Badge to ngang ngửa biểu tượng nó bám vào.
- Mỗi Badge chỉ truyền một thông điệp: hoặc "có cái mới", hoặc "có bao nhiêu", hoặc "trạng thái gì".
- Khi giá trị về 0, mặc định ẩn hoàn toàn Badge. Chỉ giữ Badge "0" khi ngữ cảnh cần khẳng định trạng thái rỗng tích cực.
- Trên màn nhỏ, ưu tiên dạng chấm thay cho số đếm dài để tiết kiệm không gian.

**Biến thể, kích thước & trạng thái**

Ba biến thể chính:
- **Số đếm (count)** — nền đỏ lỗi, chữ trắng, viền nền 2px; dùng cho thông báo, tin nhắn, giỏ hàng.
- **Chấm (dot)** — hình tròn đặc không chứa số, báo "có cái mới" khi số lượng không quan trọng.
- **Chấm trạng thái (status)** — chấm màu ngữ nghĩa đứng kèm nhãn văn bản, dùng trong danh sách/bảng.

Hai kích thước:
- **Nhỏ (sm)** — chấm 8px, số đếm cao 16px, chữ 11px; dùng trong thanh điều hướng, menu, danh sách dày.
- **Mặc định (md)** — chấm 10px, số đếm cao 20px, chữ 12px; dùng cho biểu tượng chính, giỏ hàng, chuông, avatar.

Số tràn ngưỡng: vượt 99 hiển thị `99+`; có thể nâng ngưỡng lên 999 cho ngữ cảnh số lượng lớn.

Trạng thái: có giá trị (> 0), bằng 0 (ẩn Badge), tràn ngưỡng, chấm (không số).

**Design tokens**

- `var(--ghn-error)` (`#ff4d4f`) — nền mặc định Badge đếm và chấm cảnh báo (`badge/bg-default`)
- `badge/text`: `#fff` — màu chữ số đếm
- `badge/border`: `#fff` — viền nền 2px tách Badge khỏi phần tử chủ
- `badge/status-success`: `#52c41a` — chấm thành công / hoàn tất / online
- `badge/status-warning`: `#faad14` — chấm chờ / đang xử lý
- `badge/status-error`: `#ff4d4f` — chấm lỗi / đã hủy
- `badge/status-info`: `#006fad` — chấm thông tin trung tính
- `badge/dot-size`: `10px` / `badge/dot-size-sm`: `8px`
- `badge/count-height`: `20px`, `badge/font`: Inter 600, `badge/font-size`: `12px`
- `badge/radius`: `9999px` (bo tròn hoàn toàn), `badge/border-width`: `2px`
- `badge/overflow-count`: `99` — ngưỡng trước khi hiển thị `99+`

**Khả năng tiếp cận**

- Mỗi Badge đếm cần `aria-label` mô tả đầy đủ ý nghĩa (ví dụ: "5 thông báo chưa đọc"), không chỉ đọc trơ con số.
- Badge dạng chấm không có văn bản hiển thị — phải kèm nhãn ẩn hoặc hiển thị mô tả tình trạng; không phụ thuộc riêng vào màu sắc.
- Chấm trạng thái màu xanh/vàng/đỏ luôn đi kèm nhãn chữ để người dùng phân biệt màu kém vẫn đọc được.
- Khi số đếm thay đổi theo thời gian thực, vùng chứa Badge nên là live region nhẹ để trình đọc thông báo cập nhật mà không gián đoạn.
- Badge không tự nhận `Tab`; tiêu điểm bàn phím thuộc về phần tử chủ, Badge được đọc kèm trong nhãn của phần tử đó.
- Chữ trắng `#fff` trên nền đỏ `#ff4d4f` đạt tương phản đủ cho chữ nhỏ đậm; viền nền 2px tách Badge khỏi nền tối phía sau.

## Calendar — Kế thừa

Lịch tháng/năm hiển thị toàn bộ lưới ngày thường trực trên trang, dùng để xem ngữ cảnh thời gian, định vị sự kiện và chọn ngày.

`import { Calendar } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi ngữ cảnh thời gian và mật độ sự kiện là trọng tâm: bảng điều khiển lịch trình, lịch giao hàng theo ngày, lịch trực ca.
- Dùng khi cần hiển thị sự kiện trải đều trên nhiều ngày trong tháng cùng lúc, hoặc cần so sánh mật độ hoạt động giữa các ngày/tuần.
- Dùng khi trang có không gian rộng để dành cho lưới lịch thường trực.
- KHÔNG dùng khi chỉ cần chọn một ngày trong form — dùng DatePicker bung gọn.
- KHÔNG dùng khi cần chọn khoảng ngày trong bộ lọc — dùng RangePicker.
- KHÔNG đặt vào không gian chật hẹp như sidebar mỏng hoặc ô bảng — lưới sẽ bị bóp méo.
- KHÔNG dùng khi dữ liệu mang tính chuỗi thời gian liên tục — biểu đồ phù hợp hơn lưới.

**Nên / Không nên**
- Nên: dùng chấm màu để báo sự kiện, giữ ô ngày gọn gàng, dễ quét.
- Nên: luôn đánh dấu ngày hôm nay kể cả khi đang xem tháng khác.
- Nên: giữ cố định 6 hàng để chiều cao container không thay đổi khi đổi tháng.
- Nên: phân biệt rõ ngày ngoài tháng bằng màu chữ mờ.
- Không nên: nhồi nhiều dòng nhãn sự kiện vào một ô — làm vỡ lưới và khó đọc.
- Không nên: dùng nhiều màu chấm không có chú thích — người dùng không hiểu nghĩa.
- Không nên: đặt bề rộng cứng nhỏ — lịch bị bóp méo trên màn hình hẹp.
- Không nên: dùng Calendar chỉ để chọn một ngày trong form — hãy dùng DatePicker.

**Biến thể, kích thước & trạng thái**
- Biến thể kích thước: **Đầy đủ (full)** — ô 44–52px, chữ 13px, rộng tối đa 560px, có chấm và nhãn sự kiện; **Thu gọn (compact)** — ô ~28px, chữ 11px, rộng tối đa 320px, chỉ hiển thị số ngày.
- Chế độ hiển thị: **Tháng** (lưới 7 cột × 6 hàng ngày) và **Năm** (lưới 12 tháng); người dùng đổi qua bộ chuyển Tháng/Năm trên thanh điều hướng.
- Trạng thái ô ngày: Mặc định (chữ đậm), Hôm nay (viền cam `--ghn-primary`), Được chọn (nền cam, chữ trắng), Hover (nền cam nhạt `--ghn-primary-soft`), Ngoài tháng (chữ mờ `--ghn-border`), Có sự kiện (chấm màu phía dưới số), Vô hiệu (nền xám, gạch ngang, con trỏ not-allowed).
- Responsive: dưới 900px lịch co về full-width container; lưới luôn duy trì 7 cột.

**Design tokens**
- `var(--ghn-primary)` — nền ngày được chọn, viền ngày hôm nay
- `var(--ghn-primary-soft)` — nền ô ngày khi hover
- `var(--ghn-primary-hover)` — nền ngày được chọn khi hover
- `var(--ghn-secondary)` — chấm sự kiện loại liên kết/thông tin
- `var(--ghn-text)` — chữ số ngày trong tháng hiện tại
- `var(--ghn-muted)` — chữ hàng tiêu đề thứ (T2..CN)
- `var(--ghn-border)` — đường kẻ ô, chữ ngày ngoài tháng
- `var(--ghn-subtle)` — nền hàng tiêu đề thứ, nền ô vô hiệu
- `var(--ghn-success)` — chấm sự kiện trạng thái hoàn tất
- `var(--ghn-warning)` — chấm sự kiện cần chú ý
- `var(--ghn-error)` — chấm sự kiện trễ hạn/lỗi
- `var(--ghn-r-default)` — bo góc container và ô ngày được chọn
- `var(--ghn-s4)` / `var(--ghn-s8)` — padding bên trong ô ngày
- `var(--ghn-s12)` / `var(--ghn-s16)` — padding thanh điều hướng

**Khả năng tiếp cận**
- Lưới dùng vai trò `grid`; mỗi ô là `gridcell` có nhãn ngày tháng đầy đủ; hàng tiêu đề thứ là `columnheader`.
- Phím mũi tên di chuyển giữa các ô; `Home`/`End` về đầu/cuối tuần; `Enter` hoặc `Space` chọn ngày; `PageUp`/`PageDown` chuyển tháng; kết hợp `Shift` để chuyển năm.
- Ngày được chọn mang `aria-selected="true"`; ngày hôm nay dùng `aria-current="date"`.
- Nút điều hướng chỉ-icon phải có `aria-label` mô tả rõ, ví dụ "Tháng trước".
- Không truyền đạt sự kiện chỉ bằng màu chấm; bổ sung nhãn ẩn cho trình đọc màn hình, ví dụ "có 2 sự kiện".
- Tỉ lệ tương phản chữ trên nền cam (ngày được chọn) và viền cam (hôm nay) đạt chuẩn WCAG AA.

## Card — Kế thừa

Khối nội dung gom nhóm với tiêu đề, thân và hành động; dùng để hiển thị tóm tắt đơn hàng, kiện hàng, khách hàng hoặc chỉ số vận hành trên dashboard GHN.

`import { Card } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: hiển thị danh sách đối tượng đồng dạng (đơn hàng, kiện hàng, khách hàng, kho); tóm tắt chỉ số hoặc nhóm chỉ số trên dashboard; gom thông tin và hành động liên quan vào một khối có thể nhấp; bố cục lưới để quét và so sánh nhanh nhiều mục.
- Không dùng: khi nội dung chỉ là một đoạn văn bản đơn giản (dùng văn bản thường là đủ); lồng nhiều Card vào nhau (gây lớp viền chồng chéo rối mắt); thay thế cho bảng dữ liệu khi cần so sánh nhiều cột theo hàng; bọc toàn bộ trang trong một Card lớn duy nhất không có mục đích phân nhóm.

**Nên / Không nên**
- Nên: giữ mỗi Card cho một chủ đề duy nhất với phân cấp tiêu đề và nội dung rõ ràng; dùng đệm trong và khoảng cách nhất quán giữa các Card đồng dạng trong cùng bố cục; dùng viền và bóng đổ nhẹ để tách Card khỏi nền.
- Không nên: nhồi nhiều chủ đề rời rạc vào cùng một thẻ; lồng Card vào Card (các lớp viền rối mắt, mất ý nghĩa phân nhóm); trộn lẫn các mức đệm trong và khoảng cách khác nhau trong cùng bố cục lưới; dùng bóng đổ quá đậm gây nặng nề hoặc rối mắt.

**Biến thể, kích thước & trạng thái**
- Biến thể: Card cơ bản (tiêu đề + thân); Card có ảnh bìa (cover tràn viền ở đỉnh); Card chỉ số/metric (hiển thị con số nổi bật + nhãn + biến động, dùng trên dashboard); Card có thể nhấp (toàn bộ Card là vùng tương tác, hover nổi bóng).
- Kích thước: không cố định, co giãn theo bố cục. Đệm trong chuẩn `24px`, đệm gọn `12px`–`16px` (Card nhỏ, chỉ số). Bo góc `8px`. Viền `1px`. Khoảng cách giữa các Card `16px`–`24px`.
- Trạng thái: Mặc định (viền + bóng nhẹ) → Hover (bóng đậm hơn, nâng lên) → Selected/Focus (viền cam `#ff5200` + vòng focus) → Disabled (mờ `opacity 0.6`, nền xám, không tương tác).

**Design tokens**
- Nền Card: `#ffffff`
- Nền vùng phụ / ảnh bìa giữ chỗ: `#fafafa` (`var(--ghn-bg-subtle)`)
- Viền: `#d4d4d8` (`var(--ghn-border)`)
- Văn bản tiêu đề: `#09090b` (`var(--ghn-text)`)
- Văn bản phụ: `#52525b` (`var(--ghn-muted)`)
- Nhấn mạnh / Focus: `#ff5200` (`var(--ghn-primary)`)
- Nền nhấn nhẹ / vòng focus: `#fff2e6` (`var(--ghn-primary-soft)`)
- Bo góc: `8px`
- Đệm trong: `16px` / `24px`
- Bóng đổ mặc định: `0 1px 3px rgba(9,9,11,.1)`
- Chuyển động hover: `150–200ms`

**Khả năng tiếp cận**
- Tiêu đề Card dùng thẻ heading đúng cấp (ví dụ `h3`) để trình đọc màn hình điều hướng theo cấu trúc.
- Card có thể nhấp cần gán `role="button"` hoặc dùng thẻ `<a>` và có thể nhận tiêu điểm qua bàn phím.
- Nút biểu tượng (dấu `…`, icon hành động) phải có `aria-label` mô tả chức năng.
- Điều hướng bằng `Tab`, kích hoạt bằng `Enter` hoặc `Space`; vòng focus luôn hiển thị rõ.
- Văn bản tiêu đề `#09090b` và nội dung phụ `#52525b` trên nền trắng đạt tương phản WCAG AA.
- Trạng thái chọn dùng cả viền cam lẫn vòng focus — không phụ thuộc duy nhất vào màu sắc.

## Carousel — Kế thừa

Vùng trình chiếu nhiều khối nội dung trong một khung, cho phép người dùng lướt qua từng slide bằng nút điều hướng, chấm chỉ mục hoặc tự động chuyển.

`import { Carousel } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: Banner ưu đãi, ảnh sản phẩm hoặc bộ minh hoạ cùng chủ đề.
- Dùng: Trình chiếu đánh giá khách hàng, logo đối tác xoay vòng.
- Dùng: Hướng dẫn nhiều bước dạng giới thiệu (onboarding) cho phép bỏ qua.
- KHÔNG dùng: Nội dung quan trọng buộc người dùng phải xem toàn bộ.
- KHÔNG dùng: Biểu mẫu, bảng dữ liệu hoặc thao tác cần so sánh song song.
- KHÔNG dùng: Điều hướng chính của trang — hãy dùng menu hoặc tab.

**Nên / Không nên**
- Nên: Hiển thị chấm chỉ mục và nút điều hướng rõ ràng, tương phản đủ.
- Nên: Tạm dừng autoplay khi người dùng tương tác hoặc rê chuột vào.
- Nên: Giữ tỷ lệ và chiều cao slide nhất quán để tránh nhảy bố cục.
- Không nên: Đặt autoplay quá nhanh khiến người dùng không kịp đọc.
- Không nên: Ẩn hoàn toàn chỉ mục khiến người dùng không biết còn slide khác.
- Không nên: Nhồi quá nhiều slide (trên 6) làm chấm chỉ mục mất ý nghĩa.

**Biến thể, kích thước & trạng thái**
- Biến thể: Chấm chỉ mục dưới (mặc định ngang), trượt dọc (dotPlacement theo cạnh phải).
- Kích thước: Banner đầy đủ (320–480px cao), Khối nội dung (180–240px), Thu nhỏ (120–160px); chiều rộng luôn co giãn theo vùng chứa.
- Trạng thái: Chấm hoạt động (--ghn-primary), chấm không hoạt động (--ghn-muted), nút mặc định (viền --ghn-border), nút di chuột (nền --ghn-primary-soft, viền --ghn-primary-hover), nút tiêu điểm (outline --ghn-secondary).

**Design tokens**
- `var(--ghn-primary)` — chấm chỉ mục slide đang hoạt động
- `var(--ghn-primary-soft)` — nền nút điều hướng khi di chuột
- `var(--ghn-primary-hover)` — viền nút điều hướng khi di chuột
- `var(--ghn-muted)` — chấm chỉ mục slide không hoạt động
- `var(--ghn-secondary)` — viền và outline khi nút nhận tiêu điểm
- `var(--ghn-border)` — viền khung và nút điều hướng
- `var(--ghn-subtle)` — nền khung chứa
- `var(--ghn-r-default)` — bo góc khung chứa
- `var(--ghn-s8)` — khoảng cách giữa các chấm chỉ mục
- `var(--ghn-s12)` — lề trong của nút điều hướng tới mép khung

**Khả năng tiếp cận**
- Mỗi nút chỉ-icon (chấm, mũi tên) cần `aria-label` mô tả hành động, ví dụ "Đến slide 2".
- Dùng `Tab` để tới nút điều hướng, `Enter` hoặc `Space` để kích hoạt.
- Dùng `←` / `→` để chuyển slide khi vùng Carousel đang nhận tiêu điểm.
- Vùng slide nên có `aria-roledescription="carousel"` và thông báo slide đang hiển thị qua vùng live.
- Autoplay phải có thể dừng; tạm dừng khi con trỏ di vào hoặc khi slide nhận tiêu điểm bàn phím.
- Khi người dùng bật giảm chuyển động (`prefers-reduced-motion`), chuyển slide tức thời không hiệu ứng.

## Collapse — Kế thừa

Thu gọn/mở rộng nội dung theo từng mục, giúp gom các khối thông tin dài thành những phần gọn gàng để người dùng chỉ mở phần mình cần xem.

`import { Collapse } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: trình bày FAQ về dịch vụ vận chuyển; gom chi tiết đơn hàng, lịch sử trạng thái vận đơn; ẩn tùy chọn cấu hình hoặc bộ lọc nâng cao ít dùng; tổ chức nội dung dài thành nhiều khối giảm cuộn trang.
- KHÔNG dùng: ẩn thông tin quan trọng người dùng bắt buộc phải thấy (giá cước, cảnh báo); điều hướng chính giữa các trang (dùng menu hoặc tab thay thế); khi chỉ có một khối nội dung ngắn duy nhất không cần đóng/mở; chứa biểu mẫu nhiều bước cần hoàn thành tuần tự (dùng Steps thay thế).

**Nên / Không nên**
- Nên: dùng tiêu đề header ngắn gọn, rõ nghĩa để người dùng đoán được nội dung bên trong; giữ các mục cùng cấp với cấu trúc và độ dài tiêu đề nhất quán.
- Không nên: viết tiêu đề quá dài, lan man hay dạng câu lệnh khiến header rối và khó quét; lồng Collapse nhiều cấp gây mất phương hướng và khó dùng trên mobile; dùng riêng màu sắc để báo trạng thái đóng/mở (luôn kết hợp biểu tượng xoay và aria-expanded).

**Biến thể, kích thước & trạng thái**
- Biến thể: Cơ bản (nhiều mục mở độc lập cùng lúc); Accordion (`accordion` prop — chỉ một mục mở, mở mục mới tự đóng mục cũ, tiêu đề mục đang mở nhấn bằng màu primary `#ff5200`); Ghost/không viền (bỏ nền và viền ngoài, chỉ giữ đường phân cách — dùng khi Collapse nằm trong card hoặc form); Có icon đầu mục (thêm biểu tượng minh họa ở đầu tiêu đề).
- Kích thước: Small (đệm dọc 8px, ngang 12px, chữ 14px, panel 12px) và Default (đệm dọc 12px, ngang 16px, chữ 16px, panel 16px). Bo góc ngoài luôn 8px, khoảng cách theo lưới 4px.
- Trạng thái: Đóng (mặc định); Mở/active (tiêu đề và chevron đổi sang màu primary `#ff5200`, chevron xoay 180°); Hover (nền header `#fff2e6`); Focus bàn phím (viền primary `#ff5200` dày 2px); Disabled (opacity 0.5, chữ màu placeholder).

**Design tokens**
- Nền header: `#fff`; nền header hover: `#fff2e6` (`var(--ghn-soft)`)
- Chữ tiêu đề: `#09090b` (`var(--ghn-text)`); chữ tiêu đề khi mở: `#ff5200` (`var(--ghn-primary)`)
- Biểu tượng chevron: `#52525b` (`var(--ghn-muted)`); khi mở: `#ff5200` (`var(--ghn-primary)`)
- Nền panel: `#fafafa` (`var(--ghn-bg-subtle)`); chữ panel: `#52525b` (`var(--ghn-muted)`)
- Viền: `#d4d4d8` (`var(--ghn-border)`); viền focus: `#ff5200` (`var(--ghn-primary)`)
- Bo góc: `8px`; font: Inter; letter-spacing: `0.1px`

**Khả năng tiếp cận**
- Header phải là phần tử có thể focus và kích hoạt; khai báo `aria-expanded="true/false"` theo trạng thái.
- Header trỏ tới panel qua `aria-controls`, panel có `id` tương ứng.
- Bàn phím: `Tab` di chuyển giữa các header, `Enter` hoặc `Space` để đóng/mở mục đang focus.
- Biểu tượng chevron mang `aria-hidden="true"` (chỉ trang trí); trạng thái thật truyền qua `aria-expanded`.
- Không dùng riêng màu sắc để báo trạng thái; khi `prefers-reduced-motion` bật, hiệu ứng trượt được rút gọn hoặc tắt.
- Vùng bấm header cao tối thiểu 44px trên cảm ứng.

## Descriptions — Kế thừa

Bảng cặp nhãn–giá trị dùng để trình bày thông tin chi tiết chỉ-đọc như thông tin đơn hàng, hồ sơ người gửi hoặc cấu hình tài khoản.

`import { Descriptions } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: trang chi tiết đơn hàng, chi tiết khách hàng, hồ sơ điểm gửi hàng; tóm tắt cấu hình cố định của một đối tượng; khối xác nhận trước khi gửi (read-only review); hiển thị metadata như ngày tạo, người tạo, mã tham chiếu.
- KHÔNG dùng khi người dùng cần nhập hoặc sửa giá trị tại chỗ — dùng Form thay thế.
- KHÔNG dùng để so sánh nhiều bản ghi cùng cấu trúc — dùng Table.
- KHÔNG dùng cho danh sách thực thể đồng nhất có thể cuộn dài — dùng List.
- KHÔNG dùng khi chỉ có một cặp nhãn–giá trị đơn lẻ — dùng Statistic hoặc văn bản thường.

**Nên / Không nên**
- Nên: dùng nhãn ngắn, nhất quán ("Người nhận", "Số điện thoại", "Tiền thu hộ"); hiển thị "—" cho giá trị trống thay vì để ô rỗng; cho giá trị dài (địa chỉ, ghi chú) span toàn bộ chiều ngang; đặt nút hành động ở vùng `extra` trên tiêu đề, không lẫn vào giá trị; đưa thông tin quan trọng nhất (mã đơn, trạng thái, tiền thu hộ) lên trước; gom các cặp liên quan vào cùng một khối.
- Không nên: trộn nhãn dài và ngắn khiến cột giá trị xô lệch; nhồi nhiều thao tác (sửa, xóa, sao chép) vào trong từng ô giá trị; dùng Descriptions thay cho form chỉnh sửa trực tiếp; đặt quá nhiều cột trên màn hẹp khiến nội dung bị cắt; thay đổi số cột không nhất quán trong cùng một khối.

**Biến thể, kích thước & trạng thái**
- Biến thể bố cục: 1 cột dọc, 2 cột ngang, 3 cột không viền, nhãn dọc trên giá trị (vertical layout). Prop `column` nhận số hoặc object responsive theo breakpoint.
- Có viền (`bordered`): ô nhãn có nền `var(--ghn-subtle)` + đường viền `var(--ghn-border)`.
- Kích thước: `small` (đệm `var(--ghn-s8)`) — dùng cho sidebar/popover dày đặc; `middle` mặc định (đệm `var(--ghn-s12)`) — trang chi tiết tiêu chuẩn; `large` (đệm `var(--ghn-s16)`) — trang xác nhận quan trọng.
- Trạng thái giá trị: mặc định, đang tải (skeleton bar), rỗng ("—"), nhấn mạnh ngữ nghĩa (màu `var(--ghn-error/success/warning)` kèm icon).
- Với danh sách ≥8 cặp: bọc trong `.mock-scroll` (cao tối đa 340px, cuộn nội bộ) để giữ tiêu đề và hành động luôn hiển thị.

**Design tokens**
- `var(--ghn-text)` — màu chữ giá trị (content)
- `var(--ghn-muted)` — màu chữ nhãn (label)
- `var(--ghn-secondary-text)` — chữ nút phụ ở vùng hành động
- `var(--ghn-border)` — đường viền ô khi bordered
- `var(--ghn-subtle)` — nền ô nhãn khi bordered
- `var(--ghn-primary)` / `var(--ghn-primary-soft)` — tag trạng thái chính
- `var(--ghn-success)` / `var(--ghn-warning)` / `var(--ghn-error)` — màu ngữ nghĩa cho giá trị trạng thái
- `var(--ghn-r-default)` — bo góc khối
- `var(--ghn-s8)` / `var(--ghn-s12)` / `var(--ghn-s16)` — đệm ô theo kích thước small/middle/large

**Khả năng tiếp cận**
- Dùng cấu trúc bảng ngữ nghĩa với ô tiêu đề (`scope` phù hợp) để trình đọc màn hình liên kết nhãn với giá trị.
- Không phụ thuộc duy nhất vào màu: trạng thái phải kèm icon hoặc nhãn chữ.
- Mọi nút chỉ-icon (ví dụ sao chép mã đơn) phải có `aria-label` mô tả rõ hành động.
- Phần tử tương tác nhận focus theo thứ tự đọc; di chuyển bằng `Tab`, lùi bằng `Shift+Tab`, kích hoạt bằng `Enter` hoặc `Space`.
- Tỷ lệ tương phản nhãn (`var(--ghn-muted)`) trên nền nhạt (`var(--ghn-subtle)`) đạt tối thiểu WCAG AA.

## Empty — Kế thừa

Trạng thái rỗng hiển thị khi không có dữ liệu để trình bày, giúp người dùng hiểu bối cảnh và biết bước tiếp theo.

`import { Empty } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: danh sách hoặc bảng chưa có bất kỳ bản ghi nào (lần đầu sử dụng).
- Dùng: kết quả tìm kiếm hoặc bộ lọc không khớp với mục nào.
- Dùng: khu vực nội dung mà người dùng chưa tạo dữ liệu (giỏ hàng rỗng, chưa có thông báo).
- Dùng: tính năng cần khởi tạo dữ liệu ban đầu để bắt đầu sử dụng.
- KHÔNG dùng: khi dữ liệu đang được tải — dùng Skeleton hoặc Spin thay thế.
- KHÔNG dùng: khi xảy ra lỗi tải dữ liệu hoặc mất kết nối — dùng trạng thái lỗi với tùy chọn thử lại.
- KHÔNG dùng: cho khu vực nhỏ như ô input hay nút — Empty dành cho vùng nội dung lớn.
- KHÔNG dùng: khi chỉ cần ẩn một phần tử tạm thời mà người dùng không cần biết.

**Nên / Không nên**
- Nên: viết tiêu đề rõ bối cảnh ("Chưa có đơn hàng nào") và kèm một hành động cụ thể giúp người dùng tiến lên.
- Nên: chọn minh hoạ phản ánh đúng ngữ cảnh GHN (icon xe tải cho đơn vận, kính lúp cho tìm kiếm, chuông cho thông báo).
- Nên: hiển thị skeleton trong lúc tải, chỉ chuyển sang Empty khi đã xác nhận không có dữ liệu.
- Không nên: dùng giọng tiêu cực hay icon lỗi (error icon màu đỏ) cho trạng thái rỗng bình thường.
- Không nên: dùng cùng một minh hoạ chung chung cho mọi ngữ cảnh.
- Không nên: nhồi nhét nhiều nút hành động — chỉ một bước chính.
- Không nên: hiện Empty ngay lập tức khi trang vừa tải (trước khi có kết quả từ API).

**Biến thể, kích thước & trạng thái**
- Biến thể: Cơ bản (chỉ minh hoạ + mô tả, không có nút) | Có hành động (kèm nút primary) | Tìm kiếm rỗng (nêu lại từ khóa, nút xoá bộ lọc outline) | Thu gọn (bố cục ngang cho khu vực hẹp như dropdown, popover).
- Kích thước minh hoạ — Nhỏ: 40px (padding dọc 16px, dùng trong dropdown/popover) | Vừa (mặc định): 64px (padding 32px, dùng trong card/panel/tab) | Lớn: 72–96px (padding 48px, dùng cho trang trống toàn màn hình).
- Cấu trúc: minh hoạ → tiêu đề → mô tả → nút hành động (tùy chọn), xếp dọc căn giữa, khoảng cách 16px giữa các bộ phận.
- Khoảng cách tuân theo lưới 4px; nền minh hoạ bo góc 8px.

**Design tokens**
- Màu tiêu đề: `#09090b` (var(--ghn-text))
- Màu mô tả phụ: `#52525b` (var(--ghn-muted))
- Icon minh hoạ: `#ff5200` (var(--ghn-primary))
- Nền minh hoạ (soft): `#fff2e6` (var(--ghn-soft))
- Nền vùng chứa (tùy chọn): `#fafafa`
- Nút primary: `#ff5200` | hover `#ff7429` | active `#d4490b`
- Chữ trên nút primary: `#ffffff`
- Viền nút outline: `#d4d4d8`
- Bo góc nền icon & nút: `8px`
- Khoảng cách bộ phận: `16px`; vùng đệm khối: `32px`

**Khả năng tiếp cận**
- Khối Empty nên có `role="status"` để trình đọc màn hình tự đọc khi nội dung chuyển sang trạng thái rỗng.
- Icon minh hoạ là trang trí — đặt `aria-hidden="true"`; nội dung truyền tải qua tiêu đề và mô tả dạng văn bản.
- Nút hành động dùng nhãn rõ động từ ("Tạo đơn hàng", "Xoá bộ lọc"), không dùng nhãn mơ hồ như "OK".
- Điều hướng bàn phím: Tab → nút hành động; Enter/Space kích hoạt. Nếu không có nút, khối không nhận focus.
- Vùng chạm nút tối thiểu 44×44px trên thiết bị di động.
- Tiêu đề (#09090b) và mô tả (#52525b) đều đạt chuẩn tương phản WCAG AA.
- Phân biệt Empty với lỗi bằng nội dung và icon, không chỉ bằng màu sắc.

## Image — Kế thừa

Hiển thị hình ảnh có khả năng xem trước toàn màn hình (zoom, xoay, lật) và xử lý trạng thái đang tải, lỗi tải.

`import { Image } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: ảnh sản phẩm, ảnh chứng từ cần phóng to để xem chi tiết.
- Dùng: thư viện nhiều ảnh — dùng `Image.PreviewGroup` để duyệt qua lại.
- Dùng: ảnh tải từ mạng cần `placeholder` và `fallback`.
- KHÔNG dùng: icon hoặc logo nhỏ trang trí — dùng thẻ `<img>` hoặc icon trực tiếp.
- KHÔNG dùng: ảnh nền layout — dùng CSS `background`.
- KHÔNG dùng: avatar người dùng — dùng component `Avatar`.

**Nên / Không nên**
- Nên: luôn cung cấp `alt` mô tả nội dung ảnh.
- Nên: khai báo `width`/`height` để giữ chỗ, tránh nhảy bố cục (layout shift).
- Nên: đặt `fallback` cho ảnh từ nguồn ngoài.
- Không nên: để khung không có kích thước cố định khiến trang giật khi ảnh tải xong.
- Không nên: dùng `object-fit` gây méo ảnh (ví dụ `fill` cho ảnh có chi tiết).
- Không nên: để `alt` rỗng với ảnh mang thông tin.

**Biến thể, kích thước & trạng thái**
- Biến thể: đơn lẻ (preview mặc định), `PreviewGroup` (duyệt nhiều ảnh), tắt preview (`preview={false}`).
- Kích thước: sm 120×120 (1:1), md 240×240 (1:1), lg 360×240 (3:2) — tất cả dùng `object-fit: cover`.
- Trạng thái: đang tải (placeholder), mặc định, rê chuột (overlay icon mắt), lỗi tải (fallback).

**Design tokens**
- `var(--ghn-r-default)` — bo góc khung ảnh (8px)
- `var(--ghn-r-tag)` — bo góc thumbnail trong PreviewGroup (6px)
- `var(--ghn-border)` — viền khung ảnh
- `var(--ghn-subtle)` — nền placeholder và fallback
- `var(--ghn-muted)` — icon và chữ placeholder
- `var(--ghn-text)` — chú thích ảnh (caption)
- `var(--ghn-s8)` / `var(--ghn-s24)` — khoảng cách giữa ảnh và icon
- Lớp phủ preview dùng màu đen bán trong suốt (`rgba(0,0,0,.45)`) thay vì token bề mặt để giữ tương phản trên mọi ảnh.

**Khả năng tiếp cận**
- Ảnh mang thông tin phải có `alt`; ảnh trang trí dùng `alt=""`.
- Khung ảnh nhận tiêu điểm bằng `Tab`, mở preview bằng `Enter`.
- Trong preview: `Esc` đóng, `←`/`→` chuyển ảnh trong nhóm; focus trap giữ tiêu điểm trong lớp phủ.
- Các nút thao tác (zoom, xoay, lật, đóng) đều có `aria-label` để trình đọc màn hình công bố rõ.

## List — Kế thừa

Danh sách mục đồng nhất theo trục dọc, mỗi mục gồm thông tin và hành động đi kèm.

`import { List } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi dữ liệu là chuỗi mục đồng dạng cần quét theo dòng: thông báo, đơn hàng, danh bạ — mỗi mục một thực thể.
- Dùng khi mỗi mục cần một hành động nhanh như Xem, Sửa, Xoá.
- Dùng khi nội dung dài cần cuộn, đặt trong vùng cuộn có chiều cao giới hạn.
- Dùng khi giao diện hẹp ưu tiên đọc theo dòng dọc.
- KHÔNG dùng cho dữ liệu nhiều cột cần so sánh và sắp xếp — hãy dùng Table.
- KHÔNG dùng cho bộ sưu tập hình ảnh dạng lưới — hãy dùng Card grid hoặc Image.
- KHÔNG dùng cho một vài mục lựa chọn ngắn — cân nhắc Segmented hoặc Radio.
- KHÔNG dùng cho cây phân cấp lồng nhau — hãy dùng Tree.

**Nên / Không nên**
- Nên: Dùng hairline đồng nhất để ngăn các mục, không trộn nhiều kiểu phân tách.
- Nên: Đặt hành động chính bên phải, căn lề thẳng cột giữa các mục.
- Nên: Hiển thị trạng thái rỗng có ý nghĩa thay vì danh sách trống không.
- Nên: Đặt danh sách dài trong vùng cuộn có chiều cao giới hạn.
- Không nên: Nhồi quá nhiều nút vào một mục khiến dòng rối và khó chạm.
- Không nên: Để mô tả dài tràn nhiều dòng làm vỡ nhịp quét dọc.
- Không nên: Bọc khung viền dày quanh từng mục thay vì dùng hairline.
- Không nên: Trộn lẫn chiều cao mục không đồng đều trong cùng danh sách.

**Biến thể, kích thước & trạng thái**
- Biến thể: Có viền (khung bao + hairline, dùng độc lập trên nền trắng) / Không viền (chỉ hairline, nhúng trong Card hoặc Drawer). Cả hai đều hỗ trợ header và footer tuỳ chọn.
- Kích thước: Small (đệm s8, avatar 24px) / Default (đệm s12, avatar 32px) / Large (đệm s16, avatar 44px, có mô tả phụ).
- Trạng thái mục: Mặc định / Hover (nền subtle) / Đang chọn (viền primary, nền primary-soft) / Vô hiệu (opacity 0.5) / Đang tải (skeleton) / Rỗng (icon + thông báo).

**Design tokens**
- `--ghn-text` — màu tiêu đề mục.
- `--ghn-muted` — mô tả phụ trợ, trạng thái rỗng.
- `--ghn-secondary-text` — nhãn nút hành động phụ.
- `--ghn-link` — hành động dạng liên kết, Xem tất cả.
- `--ghn-primary` — mục đang chọn, icon nhấn mạnh.
- `--ghn-primary-soft` — nền avatar, nền mục đang chọn.
- `--ghn-border` — hairline ngăn mục, viền khung.
- `--ghn-subtle` — nền header, footer, hover mục.
- `--ghn-success` / `--ghn-warning` / `--ghn-error` — trạng thái mục theo ngữ nghĩa.
- `--ghn-r-default` (8px) — bo góc khung danh sách và nút.
- `--ghn-s4` / `--ghn-s8` / `--ghn-s12` / `--ghn-s16` / `--ghn-s32` — đệm mục theo kích thước.

**Khả năng tiếp cận**
- Dùng phần tử danh sách ngữ nghĩa (`<ul>`/`<li>`) để trình đọc màn hình thông báo đúng số lượng và vị trí mục.
- Nút chỉ-icon phải có `aria-label` mô tả hành động và đối tượng, ví dụ "Xoá đơn GHN-100245".
- Điều hướng bằng Tab, ↑, ↓ và kích hoạt bằng Enter hoặc Space.
- Vùng focus phải có viền rõ tương phản đủ với nền, không chỉ dựa vào màu sắc.
- Tỷ lệ tương phản chữ tiêu đề và nền đạt tối thiểu 4.5:1; mô tả muted vẫn đảm bảo đọc được.
- Vùng chạm của hành động cấp mục tối thiểu 32px để dễ thao tác trên cảm ứng.

## Popover — Kế thừa

Khung nổi chứa nội dung phong phú (tiêu đề, văn bản, thao tác, biểu mẫu ngắn) khi click hoặc hover vào phần tử kích hoạt.

`import { Popover } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: giải thích chi tiết trạng thái, thuật ngữ hoặc biểu tượng khi người dùng cần thêm thông tin.
- Dùng: gom các thao tác phụ (sửa, sao chép, in) sau nút biểu tượng trong bảng vận đơn.
- Dùng: hiển thị thông tin nhanh khi trỏ vào tên người nhận, mã đơn hoặc địa chỉ.
- Dùng: đặt biểu mẫu rất ngắn (xác nhận, đổi nhãn) ngay cạnh điểm thao tác.
- KHÔNG dùng: cho nội dung dài, nhiều bước hoặc biểu mẫu phức tạp — dùng Modal hoặc Drawer.
- KHÔNG dùng: cho chú thích một dòng đơn thuần — dùng Tooltip nhẹ hơn.
- KHÔNG dùng: cho thông báo hệ thống quan trọng cần xác nhận — dùng Alert hoặc Modal.
- KHÔNG dùng: cho danh sách lựa chọn điều hướng chính — dùng Menu hoặc Dropdown.

**Nên / Không nên**
- Nên: giữ nội dung ngắn gọn, tập trung một chủ đề duy nhất.
- Nên: để panel đóng dễ dàng qua click ngoài, Esc hoặc nút đóng rõ ràng.
- Nên: dùng tiêu đề khi nội dung cần ngữ cảnh, giúp người dùng nắm bắt nhanh chủ đề.
- Không nên: nhồi nhiều đoạn văn dài và nhiều chủ đề vào một panel.
- Không nên: bắt buộc người dùng hoàn thành thao tác mới được đóng panel.
- Không nên: mở nhiều Popover chồng lên nhau cùng lúc.
- Không nên: dùng Popover cho nội dung phong phú trên màn hình rất nhỏ — cân nhắc Drawer hoặc trang riêng.

**Biến thể, kích thước & trạng thái**
- Biến thể: Có tiêu đề / Chỉ nội dung / Chứa thao tác (danh sách menu) / Xác nhận nhanh (kèm hai nút).
- Hướng: top, bottom, left, right — tự động lật khi thiếu không gian cạnh mép màn hình.
- Kích thước: rộng tối thiểu 177px, tối đa 320px; đệm dọc 12px / ngang 16px; bo góc 8px; mũi tên 12px.
- Trạng thái: Đóng / Mở (fade + scale nhẹ ~0,2 s) / Focus (viền nhấn) / Vô hiệu.

**Design tokens**
- Nền panel: `var(--ghn-white)` (#fff)
- Viền panel: `var(--ghn-border)` (#d4d4d8)
- Chữ tiêu đề: `var(--ghn-text)` (#09090b)
- Chữ nội dung: `var(--ghn-muted)` (#52525b)
- Màu nhấn / liên kết: `var(--ghn-primary)` (#ff5200)
- Viền focus: `var(--ghn-primary-soft)` (#fff2e6)
- Bo góc: `8px`; đổ bóng: `0 6px 16px rgba(9,9,11,.12)`

**Khả năng tiếp cận**
- Phần tử kích hoạt khai báo `aria-haspopup` và `aria-expanded`.
- Panel dùng `role=dialog` (thao tác) hoặc `role=tooltip` (chỉ thông tin); liên kết qua `aria-controls` và `aria-labelledby`.
- Nút đóng cần `aria-label="Đóng"` rõ ràng.
- Bàn phím: Enter/Space mở, Esc đóng và trả focus về điểm kích hoạt, Tab duyệt nội dung.
- Với panel chứa thao tác quan trọng (xác nhận, hủy), dùng `role=dialog` và bẫy focus trong panel.
- Tỷ lệ tương phản chữ > 4.5:1; không truyền thông tin chỉ bằng màu sắc.

## QR Code — Kế thừa

Hiển thị mã ma trận hai chiều để người dùng quét bằng camera điện thoại, dùng cho thanh toán, xác thực và chia sẻ liên kết nhanh. Hỗ trợ logo thương hiệu đặt giữa mã.

`import { QRCode } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: thanh toán đơn hàng qua ứng dụng ngân hàng/ví; đăng nhập nhanh bằng cách quét trên thiết bị khác; chia sẻ liên kết theo dõi đơn hàng; tải ứng dụng hoặc mở trang khi đang ở quầy/poster.
- KHÔNG dùng: khi người dùng đang ở chính trên điện thoại đó (dùng nút thay vì QR); cho nội dung văn bản dài cần đọc trực tiếp; mã chứa dữ liệu nhạy cảm không mã hoá; khi không thể đảm bảo kích thước hiển thị tối thiểu.

**Nên / Không nên**
- Nên: giữ nền sáng, module tối với tương phản đủ cao; đặt logo chính giữa, không vượt 25% diện tích; hiển thị nút tải lại khi mã có thời hạn; kèm nhãn mô tả hành động ngay dưới mã.
- Không nên: đảo màu (nền tối, module sáng) làm khó quét; kéo méo mã thành hình chữ nhật; đặt mã đè lên ảnh nền nhiều chi tiết; bỏ vùng yên tĩnh hoặc cắt sát viền mã.

**Biến thể, kích thước & trạng thái**
- Biến thể: Mặc định (không logo) / Có logo thương hiệu (logo ≤ 25% diện tích).
- Kích thước: `sm` 96px (trong bảng, thẻ nhỏ), `md` 160px (màn hình thanh toán, modal), `lg` 240px (poster, toàn trang, in ấn).
- Trạng thái: Bình thường, Đang tải (spinner), Hết hạn (mờ + nút "Tải lại"), Lỗi tạo mã (viền đỏ + nút "Thử lại").

**Design tokens**
- `var(--ghn-text)` — màu module và ô định vị
- `var(--ghn-primary)` — viền logo thương hiệu giữa mã
- `var(--ghn-border)` — viền khung chứa mã QR
- `var(--ghn-subtle)` — nền trạng thái đang tải/hết hạn
- `var(--ghn-error)` — viền và biểu tượng trạng thái lỗi
- `var(--ghn-muted)` — văn bản nhãn ngữ cảnh phụ
- `var(--ghn-r-default)` — bo góc khung chứa mã (8px)
- `var(--ghn-s8)` / `var(--ghn-s12)` — padding vùng yên tĩnh theo kích thước

**Khả năng tiếp cận**
- Cung cấp `aria-label` mô tả mục đích, ví dụ "Mã QR thanh toán đơn hàng".
- Luôn kèm liên kết/đường dẫn văn bản thay thế cho người dùng cùng thiết bị (không thể quét).
- Nút chỉ-icon (tải lại, tải xuống) phải có `aria-label` rõ ràng.
- Thao tác bàn phím: `Tab` di chuyển tới nút, `Enter` hoặc `Space` kích hoạt.
- Đảm bảo tương phản module/nền đạt tối thiểu để camera và mắt người phân biệt được.

## Segmented — Kế thừa

Bộ chọn phân đoạn hiển thị 2–5 lựa chọn loại trừ lẫn nhau trong một thanh nền, cho phép chuyển nhanh giữa các chế độ xem hoặc bộ lọc mà không tải lại trang.

```ts
import { Segmented } from 'antd';
```

**Khi nào dùng / KHÔNG dùng**

- Dùng khi có 2–5 lựa chọn ngắn gọn, ngang hàng nhau (ví dụ: Đang giao / Đã giao / Hoàn, hoặc Ngày / Tuần / Tháng).
- Dùng để chuyển đổi giữa các chế độ xem cùng một vùng nội dung (Danh sách / Bản đồ).
- Dùng để lọc nhanh theo trạng thái vận đơn ngay trên đầu bảng.
- KHÔNG dùng khi có nhiều hơn 5 lựa chọn hoặc nhãn dài — dùng Select hoặc Tabs thay thế.
- KHÔNG dùng cho chọn nhiều mục cùng lúc — dùng Checkbox.
- KHÔNG dùng để bật/tắt một trạng thái nhị phân đơn lẻ — dùng Switch.
- KHÔNG dùng để điều hướng sang trang khác — dùng Menu hoặc Tabs.

**Nên / Không nên**

- Nên: Giữ nhãn ngắn, ngang hàng; số đoạn từ 2 đến 5.
- Nên: Dùng icon bổ trợ ý nghĩa cho nhãn; kích thước và phong cách icon đồng nhất trong cả thanh.
- Nên: Luôn chỉ có đúng một đoạn được chọn tại một thời điểm.
- Không nên: Nhồi nhãn dài khiến thanh tràn và khó đọc — chuyển sang Select.
- Không nên: Để nhiều đoạn cùng "đang chọn" cho trường hợp chọn nhiều — dùng Checkbox.
- Không nên: Ghép icon không liên quan đến nhãn, gây nhiễu và khó hiểu.
- Không nên: Để thanh xuống dòng — Segmented luôn nằm trên một hàng duy nhất.
- Không nên: Trên màn hình rất hẹp mà nhãn quá dài — chuyển sang biến thể chỉ icon hoặc dùng Select.

**Biến thể, kích thước & trạng thái**

Biến thể nội dung:
- Chỉ chữ (mặc định) — dùng trong hầu hết trường hợp.
- Icon kèm chữ — icon đặt trước nhãn, cách nhãn 8px; dùng khi icon thật sự bổ trợ ý nghĩa.
- Chỉ icon — dùng khi không gian hẹp và icon đủ rõ nghĩa; bắt buộc thêm `aria-label` ẩn cho mỗi đoạn.

Biến thể bố cục:
- Vừa nội dung (mặc định).
- Full width (`block`) — các đoạn chia đều bề rộng vùng chứa.

Kích thước:
| Kích thước | Chiều cao thanh | Đệm đoạn (dọc × ngang) | Cỡ chữ |
|---|---|---|---|
| Nhỏ (sm) | 28px | 2px × 12px | 12px |
| Vừa (mặc định) | 36px | 4px × 16px | 14px |
| Lớn (lg) | 44px | 8px × 20px | 16px |

Trạng thái:
- Mặc định — nền trong suốt, chữ màu phụ `#52525b`.
- Hover — nền sáng nhẹ, chữ đậm dần sang `#09090b`.
- Đã chọn — nền trắng `#fff`, chữ đậm, bóng đổ nhẹ.
- Focus bàn phím — viền focus `#ff5200` bao quanh đoạn.
- Vô hiệu hóa — giảm độ mờ, chữ `#71717a`, không nhận tương tác.
- Có thể vô hiệu hóa toàn bộ thanh hoặc chỉ từng đoạn riêng lẻ.

**Design tokens**

| Token | Giá trị |
|---|---|
| Nền thanh (track) | `var(--ghn-bg-subtle)` / `#fafafa` |
| Viền thanh | `var(--ghn-border)` / `#d4d4d8` |
| Nền đoạn chọn | `var(--ghn-white)` / `#fff` |
| Chữ đoạn chọn | `var(--ghn-text)` / `#09090b` |
| Chữ đoạn chưa chọn | `var(--ghn-muted)` / `#52525b` |
| Chữ khi vô hiệu hóa | `#71717a` |
| Vòng focus | `var(--ghn-primary)` / `#ff5200` |
| Bo góc thanh | `8px` |
| Bo góc đoạn (viên trượt) | `6px` |
| Đệm trong track | `4px` |
| Khoảng cách icon–nhãn | `8px` |
| Thời lượng trượt (motion) | `200ms ease-out` |

**Khả năng tiếp cận**

- Thanh dùng `role="radiogroup"` kèm `aria-label` mô tả mục đích nhóm; mỗi đoạn dùng `role="radio"` kèm `aria-checked` đúng trạng thái.
- Biến thể chỉ icon: bắt buộc `aria-label` ẩn cho từng đoạn.
- Đoạn vô hiệu hóa: gán `aria-disabled="true"` và loại khỏi luồng tiêu điểm bàn phím.
- Hỗ trợ đầy đủ: Tab, ←, →, ↑, ↓, Home, End; cả nhóm chỉ chiếm một điểm dừng tab (roving tabindex).
- Vòng focus `#ff5200` chỉ hiện khi điều hướng bằng bàn phím, không hiện khi nhấp chuột.
- Trạng thái chọn phân biệt bằng nền trắng + bóng đổ + độ đậm chữ — không chỉ dựa vào màu sắc.
- Tôn trọng `prefers-reduced-motion`: viên trượt đổi vị trí tức thì, không hiệu ứng trượt.

## Statistic — Kế thừa

Hiển thị một con số quan trọng kèm nhãn, đơn vị và chỉ báo xu hướng tùy chọn.

`import { Statistic } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng: làm nổi bật KPI trên dashboard (tổng doanh thu, số đơn đang giao, tỉ lệ giao thành công); tóm tắt một con số kèm xu hướng so với kỳ trước; đặt thành nhóm thẻ tổng quan đầu trang báo cáo; hiển thị giá trị đếm ngược hoặc đang chạy.
- Không dùng: khi cần thể hiện diễn biến theo thời gian (dùng biểu đồ đường/cột); khi có nhiều dòng dữ liệu cần đối chiếu chi tiết (dùng Table); khi muốn nhồi nhiều con số phụ vào một khối làm mất trọng tâm; dùng làm nút bấm hoặc liên kết (Statistic là phần tử hiển thị, không phải điều khiển).

**Nên / Không nên**

- Nên: dùng dấu chấm phân tách hàng nghìn và đơn vị rõ ràng (ví dụ: "1.245 triệu ₫").
- Không nên: để số thô không phân tách, không đơn vị (ví dụ: "1245000000") — buộc người đọc tự đếm chữ số.
- Nên: hiển thị xu hướng kèm mốc so sánh rõ ràng (ví dụ: "0,4% so với tuần trước").
- Không nên: hiện phần trăm tăng mà không nói "so với cái gì" — con số phần trăm không có mốc là vô nghĩa.
- Không nên: lạm dụng hiệu ứng đếm count-up cho mọi lần render lại — chỉ dùng cho thay đổi do người dùng kích hoạt (đổi bộ lọc, làm mới).

**Biến thể, kích thước & trạng thái**

- Biến thể: Cơ bản (chỉ nhãn + giá trị + đơn vị); Có xu hướng tăng (mũi tên lên + màu `#52c41a` + mốc so sánh); Có xu hướng giảm (mũi tên xuống + màu `#ff4d4f`); Đơn vị đứng trước/prefix (ví dụ ký hiệu ₫ đặt trước số tiền); Nhóm Statistic (nhiều khối cạnh nhau, có thể nhấn một con số bằng `var(--ghn-primary)`).
- Kích thước: Nhỏ (sm) — số 20px, nhãn 12px, dùng trong bảng/widget nhỏ; Mặc định (md) — số 30px, nhãn 14px, thẻ KPI tiêu chuẩn; Lớn (lg) — số 38px, nhãn 16px, con số chủ đạo trang/banner báo cáo.
- Trạng thái: Mặc định (dữ liệu sẵn sàng); Đang tải (hiển thị skeleton/spinner); Trống (chưa có dữ liệu — dùng dấu gạch "—"); Lỗi (không tải được số liệu, hiển thị icon + chữ "Lỗi tải").

**Design tokens**

- `var(--ghn-text)` (`#09090b`) — màu giá trị chính; font-weight 600.
- `var(--ghn-muted)` (`#52525b`) — màu nhãn và đơn vị.
- `var(--ghn-success)` (`#52c41a`) — màu xu hướng tăng.
- `var(--ghn-error)` (`#ff4d4f`) — màu xu hướng giảm.
- `var(--ghn-primary)` (`#ff5200`) — nhấn con số quan trọng trong nhóm.
- Cỡ số: 20px / 30px / 38px; cỡ nhãn 14px; cỡ đơn vị 16px.
- Khoảng cách nhãn–số: 8px; khoảng cách số–xu hướng: 8px; padding thẻ: 24px; bo góc thẻ: 8px.

**Khả năng tiếp cận**

- Đảm bảo trình đọc màn hình đọc liền mạch nhãn và giá trị (ví dụ: "Tổng đơn hôm nay, 12.480 đơn"), không tách thành các mảnh rời.
- Xu hướng tăng/giảm phải dùng cả icon mũi tên lẫn màu — không chỉ dựa vào màu để người khiếm thị màu vẫn hiểu.
- Bổ sung văn bản ẩn cho dòng xu hướng (ví dụ `aria-label="tăng so với hôm qua"`) vì màu không được trình đọc màn hình thông báo.
- Giá trị chính `#09090b` trên nền trắng đạt tương phản cao; nhãn muted `#52525b` vẫn đạt ngưỡng AA.
- Statistic là phần tử tĩnh, không nhận focus. Nếu nằm trong thẻ bấm được, thẻ phải kích hoạt được bằng `Enter` và `Space`.
- Trạng thái tải/lỗi phải thông báo bằng văn bản qua `aria-live`, không để vùng số trống lặng lẽ.

## Table — Kế thừa

Hiển thị dữ liệu có cấu trúc theo hàng và cột, hỗ trợ sắp xếp, lọc và phân trang trên tập dữ liệu lớn như danh sách đơn hàng.

`import { Table } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: hiển thị danh sách đơn hàng nhiều cột (mã, người nhận, trạng thái, tiền); cần so sánh giá trị giữa các hàng theo cùng một cột; cần sắp xếp, lọc, phân trang trên tập dữ liệu lớn; cần chọn nhiều hàng để thao tác hàng loạt.
- KHÔNG dùng: mỗi mục chỉ có một hai trường — dùng List thay thế; nội dung giàu hình ảnh — dùng Card; dữ liệu phân cấp sâu — cân nhắc Tree hoặc Tree Table; chỉ hiển thị một bản ghi chi tiết — dùng Descriptions.

**Nên / Không nên**
- Nên: căn phải cột số và tiền, dùng cùng định dạng đơn vị; giữ tiêu đề cột ngắn gọn, rõ ràng và sticky khi cuộn; dùng tag màu nhất quán cho từng trạng thái đơn hàng; hiển thị trạng thái rỗng và đang tải thay vì bảng trống không lời giải thích.
- Không nên: nhồi quá nhiều cột khiến phải cuộn ngang liên tục; dùng nhiều màu nền hàng làm rối mắt và khó quét; đặt nội dung dài làm vỡ chiều cao hàng không đều; ẩn cột định danh quan trọng trên màn hình nhỏ.

**Biến thể, kích thước & trạng thái**
- Biến thể: mặc định (hàng ngăn cách bằng border dưới); sọc ngựa vằn (zebra — hàng chẵn tô `--ghn-subtle`); có viền (bordered — kẻ đường giữa các ô); gọn (compact — giảm padding); có ô chọn (selectable — thêm cột checkbox).
- Kích thước: `large` (padding 16px — `--ghn-s16`, bảng ít hàng cần thoáng); `middle` (12px — `--ghn-s12`, mặc định); `small` (8px — `--ghn-s8`, bảng dày đặc).
- Trạng thái hàng: mặc định; hover (nền `--ghn-subtle`); đã chọn (nền `--ghn-primary-soft`, viền `--ghn-primary`); đang tải (spinner + chữ muted); rỗng (icon inbox + thông báo); vô hiệu hóa (opacity 0.5).

**Design tokens**
- `--ghn-text` — màu chữ chính trong ô
- `--ghn-secondary-text` — màu chữ tiêu đề cột
- `--ghn-muted` — chữ phụ, trạng thái rỗng/đang tải
- `--ghn-border` — đường kẻ hàng, cột và viền bảng
- `--ghn-subtle` — nền tiêu đề, hàng sọc và hover
- `--ghn-primary` — viền hàng chọn, nút trang hiện tại
- `--ghn-primary-soft` — nền hàng được chọn
- `--ghn-success` / `--ghn-warning` / `--ghn-error` — tag trạng thái (đã giao / chờ lấy / hoàn hàng)
- `--ghn-r-default` — bo góc khung bảng và nút phân trang
- `--ghn-s12` / `--ghn-s16` — khoảng đệm dọc và ngang trong ô

**Khả năng tiếp cận**
- Dùng đúng cấu trúc ngữ nghĩa `<thead>`/`<th>` để trình đọc màn hình công bố tên cột.
- Mọi checkbox và nút chỉ-icon phải có `aria-label` mô tả hành động.
- Hỗ trợ bàn phím: `Tab` di chuyển, `Space` chọn hàng, `Enter` sắp xếp, `Shift+Tab` quay lại.
- Trạng thái đơn không chỉ phân biệt bằng màu — luôn kèm nhãn chữ trong tag.
- Đảm bảo độ tương phản chữ trên nền đạt chuẩn WCAG AA.

## Tabs — Kế thừa

Chuyển giữa các nhóm nội dung cùng cấp trong một vùng hiển thị duy nhất.

`import { Tabs } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi nội dung chia thành 2–7 nhóm ngang hàng, thay thế cho nhau (ví dụ: Thông tin đơn / Hành trình / Thanh toán).
- Dùng khi người dùng cần so sánh hoặc nhảy qua lại giữa các nhóm trong cùng một bối cảnh.
- Dùng khi muốn tiết kiệm không gian dọc, gom nhiều khối liên quan vào một khung.
- Dùng khi nội dung mỗi nhóm đủ độc lập, không yêu cầu hoàn tất nhóm trước.
- KHÔNG dùng khi nội dung phải thực hiện theo thứ tự từng bước — dùng Steps/Wizard thay thế.
- KHÔNG dùng khi số nhóm trên 7–8 tab — cân nhắc menu hoặc danh sách dọc.
- KHÔNG dùng khi người dùng cần xem nhiều nhóm cùng lúc — Tabs chỉ hiện một panel tại một thời điểm.
- KHÔNG dùng để điều hướng giữa các trang khác nhau của ứng dụng — đó là việc của menu/navigation.

**Nên / Không nên**
- Nên: Dùng nhãn ngắn 1–2 từ, số lượng tab vừa phải, một tab active rõ ràng với gạch chân #ff5200.
- Nên: Dùng Tabs cho nội dung ngang hàng, thay thế cho nhau trong cùng một bối cảnh.
- Nên: Đặt nội dung quan trọng nhất ở tab đầu tiên (tab mặc định người dùng nhìn thấy trước).
- Nên: Giữ nguyên thứ tự tab giữa các lần truy cập.
- Không nên: Đặt nhãn dài, nhiều chữ khiến thanh tab vỡ dòng.
- Không nên: Dùng Tabs cho quy trình tuần tự nhiều bước — dùng Steps thay thế.
- Không nên: Dùng icon đơn thuần không có chữ trên tab mà không cung cấp nhãn ẩn cho trình đọc màn hình.
- Không nên: Dùng riêng màu sắc để báo tab active — luôn kèm gạch chân hoặc nền.

**Biến thể, kích thước & trạng thái**
- Biến thể: **line** (mặc định — thanh tab phẳng, chỉ báo gạch chân `--ghn-primary #ff5200`), **card** (mỗi tab là thẻ có viền và bo góc `8px`, dùng khi cần ranh giới rõ ràng), **có icon** (icon FontAwesome đặt trước nhãn, cách chữ `8px`), **dọc/vertical** (thanh tab bên trái, chỉ báo vạch cạnh phải).
- Kích thước: sm (padding 8px/12px, font 13px), mặc định (padding 12px/16px, font 14px), lg (padding 16px/20px, font 16px). Gạch chân active luôn dày `2px`.
- Trạng thái: mặc định (`--ghn-muted #52525b`), hover (chữ `#09090b`), active (`--ghn-primary #ff5200` + gạch chân), focus (viền `--ghn-link #006fad`), vô hiệu (mờ, `--ghn-placeholder #71717a`), có badge đếm cạnh nhãn.
- Vùng nhấn tối thiểu mỗi tab: cao `40px`.

**Design tokens**
- `--ghn-primary #ff5200` — chữ và gạch chân tab active
- `--ghn-hover #ff7429` — sắc cam sáng khi hover chỉ báo
- `--ghn-soft #fff2e6` — nền tab active dạng dọc
- `--ghn-muted #52525b` — nhãn tab chưa chọn
- `--ghn-text #09090b` — nhãn tab khi hover
- `--ghn-placeholder #71717a` — nhãn tab vô hiệu
- `--ghn-border #d4d4d8` — đường phân tách thanh tab và viền card
- `--ghn-link #006fad` — vòng focus bàn phím
- `--ghn-white #fff` — nền panel và thẻ tab active (card)
- `--ghn-bg-subtle #fafafa` — nền thẻ tab chưa chọn (card)

**Khả năng tiếp cận**
- Thanh tab dùng `role="tablist"`, nhãn tab `role="tab"`, vùng nội dung `role="tabpanel"`.
- Mỗi tab có `aria-controls` trỏ tới panel; panel có `aria-labelledby` trỏ ngược về tab; tab active đặt `aria-selected="true"`.
- Tab vô hiệu dùng `aria-disabled="true"` và loại khỏi luồng focus.
- Điều hướng bàn phím: `Tab` vào thanh tab, `←` `→` (hoặc `↑` `↓` dọc) di chuyển giữa tab, `Home`/`End` đến tab đầu/cuối, `Enter`/`Space` kích hoạt tab.
- Tab chỉ có icon phải có nhãn văn bản ẩn cho trình đọc màn hình; ưu tiên luôn có cả icon lẫn chữ.
- Tôn trọng `prefers-reduced-motion` — khi bật, chuyển tức thì không animation.

## Tag / Chips — Ổn định

Nhãn nhỏ phân loại, lọc hoặc gắn trạng thái cho đối tượng trong giao diện GHN.

`import { Tag } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: hiển thị trạng thái vận đơn trong danh sách/bảng (Đang giao, Đã giao, Hoàn hàng).
- Dùng: phân loại đối tượng theo thuộc tính — loại dịch vụ, khu vực, kho, nhóm khách hàng.
- Dùng: hiển thị bộ lọc đang áp dụng, cho phép gỡ từng điều kiện bằng nút ×.
- Dùng: đánh dấu nhanh thuộc tính như "Mới", "VIP", "Ưu tiên".
- KHÔNG dùng: thay cho nút bấm để thực hiện hành động chính (Tạo đơn, Lưu) — dùng Button.
- KHÔNG dùng: hiển thị thông báo dài cần người dùng đọc và phản hồi — dùng Alert.
- KHÔNG dùng: đặt quá nhiều Tag màu sặc sỡ cạnh nhau khiến màn hình rối.
- KHÔNG dùng: chứa câu văn dài hoặc đoạn mô tả; Tag không cuộn hay xuống dòng nhiều.

**Nên / Không nên**
- Nên: dùng đúng nhóm màu ngữ nghĩa — kết quả tích cực dùng Success (xanh lá), sự cố dùng Error (đỏ).
- Nên: giữ nhãn ngắn gọn, một đến ba từ, dễ quét trong danh sách.
- Nên: phần lớn Tag ở dạng Soft; chỉ dùng Solid nơi thực sự cần nổi bật — màn hình cân bằng, dễ nhìn.
- Không nên: gán màu trái ý nghĩa (ví dụ dùng Error đỏ cho trạng thái thành công).
- Không nên: nhét cả câu vào Tag; nội dung dài làm Tag mất tính súc tích.
- Không nên: đặt hàng loạt Tag Solid sặc sỡ cạnh nhau — màn hình rối, không còn điểm nhấn.
- Không nên: truyền tải thông tin chỉ bằng màu; luôn kèm nhãn văn bản để người mù màu vẫn hiểu.

**Biến thể, kích thước & trạng thái**
- Dạng nền: **Solid** (nền đặc, chữ tương phản cao — dùng cho trạng thái quan trọng cần nổi bật) và **Soft** (nền nhạt, chữ đậm cùng tông — lựa chọn mặc định cho phần lớn trường hợp).
- Nhóm màu ngữ nghĩa: Neutral (trung tính, phân loại chung), Brand (cam GHN, dịch vụ cốt lõi), Success (xanh lá, kết quả tích cực), Warning (vàng, cần lưu ý/đang chờ), Error (đỏ, sự cố/tiêu cực), Info (xanh dương, thông tin trung lập).
- Kích thước: Small (20px cao, chữ 12px, đệm ngang 8px) — bảng mật độ cao; Medium/mặc định (28px cao, chữ 14px, đệm ngang 10px); Large (36px cao, chữ 16px, đệm ngang 12px) — thẻ chi tiết thoáng.
- Bo góc Tag: **6px** (nhỏ hơn radius mặc định 8px của hệ thống để tránh nhầm với nút bấm).
- Biến thể đặc biệt: Dismissible (có nút × gỡ bỏ — dùng cho bộ lọc đang áp dụng); Icon + nhãn (icon dẫn đầu củng cố ý nghĩa).
- Trạng thái: Mặc định (tĩnh); Hover (chỉ khi Tag có thể bấm/gỡ — nền đậm nhẹ); Focus (viền outline 2px primary); Disabled (mờ 50%, con trỏ not-allowed).

**Design tokens**
- Bo góc: `6px` (cố định cho mọi Tag)
- Đệm ngang medium: `10px`
- Khoảng cách icon–nhãn: `4px` (small/medium), `8px` (large)
- Font: `Inter`, letter-spacing `0.1px`
- Brand Solid nền: `#ff5200`; chữ: `#fff`
- Brand Soft nền: `#fff2e6`; chữ: `#ff5200`
- Neutral Soft nền: `#fafafa`; chữ: `#52525b`; viền: `#d4d4d8`
- Success: `#52c41a` | Warning: `#faad14` | Error: `#ff4d4f` | Info: `#006fad`
- Chữ chính (label): `#09090b`
- Lưu ý Warning Solid: dùng chữ màu text đậm thay vì trắng để đủ tương phản.

**Khả năng tiếp cận**
- Nút gỡ × bắt buộc có `aria-label` mô tả đầy đủ, ví dụ `aria-label="Gỡ thẻ Hà Nội"`.
- Icon dẫn đầu trang trí phải có `aria-hidden="true"` (ý nghĩa đã ở nhãn văn bản).
- Nút gỡ là phần tử `role="button"`, nhận focus qua `Tab`, kích hoạt bằng `Enter`/`Space`.
- Tag tĩnh không nằm trong thứ tự tab (không có hành động).
- Viền focus luôn hiển thị rõ (outline 2px primary, offset 2px); không bao giờ tắt bằng `outline: none`.
- Khi gỡ Tag trong nhóm, focus chuyển sang Tag kế tiếp hoặc về vùng chứa.
- Tôn trọng `prefers-reduced-motion`: tắt animation, chỉ đổi tức thời.
- Tag Solid đạt tỉ lệ tương phản tối thiểu 4.5:1; Tag Soft cũng đạt chuẩn AA.

## Timeline — Kế thừa

Hiển thị chuỗi sự kiện theo trật tự thời gian dọc theo một trục, dùng nhiều nhất để thể hiện hành trình đơn hàng trong hệ sinh thái GHN.

`import { Timeline } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: hành trình đơn hàng, lịch sử vận chuyển, nhật ký trạng thái (audit log), các bước đã/đang/sẽ diễn ra theo thời gian, khi cần nhấn mạnh thứ tự trước–sau và tính liên tục.
- KHÔNG dùng: dữ liệu không có quan hệ thời gian (dùng List hoặc Table); quy trình tác vụ tuần tự cần điều hướng (dùng Steps); so sánh nhiều cột dữ liệu (dùng Table); chỉ có một sự kiện duy nhất.

**Nên / Không nên**
- Nên: dùng màu xanh cho mốc đã hoàn tất, cam cho mốc đang diễn ra, xám cho mốc chưa tới — đúng ngữ nghĩa trạng thái.
- Nên: giữ tiêu đề mốc ngắn gọn (một dòng), tách nhãn thời gian ra dòng/cột riêng để dễ quét.
- Nên: sắp xếp tất cả mốc theo một chiều thời gian nhất quán trong cùng một Timeline.
- Không: dùng màu mốc tùy hứng để trang trí — người dùng sẽ hiểu sai trạng thái sự kiện.
- Không: nhồi mô tả dài và thời gian vào cùng một dòng khiến mốc rối và khó đọc.
- Không: trộn thứ tự mới-trên-cũ với cũ-trên-mới trong cùng một danh sách.

**Biến thể, kích thước & trạng thái**
- Biến thể: Cơ bản (nút mốc trái, nội dung phải) — mặc định; So le hai phía (alternate) — dùng khi không gian rộng; Đang xử lý (pending) — mốc cuối dùng spinner; Nhãn thời gian hai phía (label–content) — thời gian cố định bên trái trục.
- Trạng thái nút mốc: Hoàn tất — success xanh (fa-circle-check); Đang xử lý — primary cam (fa-circle-dot); Đang chờ — spinner quay; Cảnh báo — warning vàng (fa-circle-exclamation); Lỗi — error đỏ (fa-circle-xmark); Chờ tới — xám (fa-circle).
- Kích thước: nút mốc 12px (vùng chạm tối thiểu 24px), trục 2px, khoảng cách giữa mốc 20–24px, khoảng trục→nội dung 16px, tiêu đề 14px/Inter/line-height 20px, thời gian 12px/muted.
- Responsive: biến thể so le tự chuyển về một phía trên màn hình hẹp; nhãn thời gian hai phía gộp xuống dưới nội dung khi chiều rộng không đủ.

**Design tokens**
- `var(--ghn-success)` — nút mốc hoàn tất (#52c41a)
- `var(--ghn-primary)` — nút mốc đang xử lý (#ff5200)
- `var(--ghn-warning)` — nút mốc cảnh báo (#faad14)
- `var(--ghn-error)` — nút mốc lỗi (#ff4d4f)
- `var(--ghn-placeholder)` — nút mốc chưa tới (#71717a)
- `var(--ghn-border)` — màu trục dọc (#d4d4d8)
- `var(--ghn-text)` — màu tiêu đề nội dung (#09090b)
- `var(--ghn-muted)` — màu nhãn thời gian (#52525b)
- Token kích thước: `size/timeline/node` 12px, `size/timeline/axis-width` 2px, `space/timeline/gap` 24px, `space/timeline/node-content` 16px.

**Khả năng tiếp cận**
- Bao Timeline trong `role="list"` và mỗi mốc trong `role="listitem"` để trình đọc màn hình thông báo đúng số lượng và thứ tự.
- Không chỉ dựa vào màu: mỗi trạng thái đi kèm icon riêng (check, dot, exclamation, xmark) và/hoặc nhãn chữ — đảm bảo người mù màu phân biệt được.
- Icon trạng thái dùng `aria-hidden="true"`; ngữ nghĩa trạng thái nêu trong văn bản hoặc `aria-label` trên mốc, ví dụ "Đã hoàn tất: Lấy hàng".
- Mốc tương tác: nằm trong thứ tự Tab đúng trình tự thời gian, kích hoạt bằng Enter/Space, có vòng focus rõ ràng (2px màu primary, lệch 2px). Timeline thuần hiển thị không nhận focus.
- Tôn trọng `prefers-reduced-motion`: tắt spinner quay và hiệu ứng trượt khi người dùng yêu cầu giảm chuyển động.

## Tooltip — Kế thừa

Bong bóng văn bản ngắn hiện khi hover/focus, cung cấp thông tin bổ trợ tức thời mà không chiếm chỗ giao diện.

`import { Tooltip } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: giải thích nút chỉ có icon (in, sao chép mã vận đơn, lọc); hiển thị đầy đủ nhãn bị cắt ngắn do thiếu chỗ; bổ sung ngữ cảnh cho biểu tượng trạng thái đơn hàng; làm rõ định dạng dữ liệu mong muốn ở trường nhập liệu.
- Không dùng: nội dung dài nhiều dòng hoặc cần cuộn (dùng Popover); chứa link/nút/thao tác tương tác; hiển thị thông báo lỗi trường nhập liệu (dùng văn bản trợ giúp dưới trường); truyền tải thông tin bắt buộc để hoàn thành quy trình.

**Nên / Không nên**
- Nên: dùng cụm động từ ngắn, rõ chức năng cho nút chỉ có icon (vd: "In phiếu giao hàng"); đặt Tooltip giải thích bên cạnh nhãn để bổ sung ngữ cảnh.
- Không nên: nhồi cả đoạn hướng dẫn dài vào Tooltip; dùng Tooltip để báo lỗi quan trọng (dùng Alert hoặc văn bản trợ giúp thay thế).

**Biến thể, kích thước & trạng thái**
- Vị trí: top (mặc định), bottom, left, right — tự động đảo sang phía đối diện khi sát mép màn hình.
- Chỉ có một cỡ: padding 6px 12px, font 13px, bo góc 8px, bề rộng tối đa 240px.
- Trạng thái: ẩn (mặc định) → hiện sau hover ~0.4s hoặc ngay khi nhận focus bàn phím → ẩn khi rời chuột/focus hoặc nhấn Esc.
- Hiệu ứng mờ dần kèm dịch chuyển 4px trong 0.1–0.2s; tôn trọng prefers-reduced-motion.

**Design tokens**
- Nền bong bóng & mũi tên: `#09090b` (var(--ghn-text))
- Màu chữ: `#fff` (var(--ghn-white))
- Bo góc: `8px`
- Padding: `6px 12px`
- Cỡ chữ: `13px`; họ chữ: Inter; letter-spacing: `.1px`
- Kích thước mũi tên: `10px` (cạnh đáy tam giác)
- Khe hở tới phần tử kích hoạt: `8px`
- Bề rộng tối đa: `240px`
- Thời lượng chuyển động: `0.1–0.2s`

**Khả năng tiếp cận**
- Gắn `aria-describedby` trỏ tới bong bóng để trình đọc màn hình đọc nội dung bổ trợ.
- Bong bóng dùng `role="tooltip"`.
- Tooltip phải hiện khi phần tử nhận focus bàn phím (Tab), không chỉ khi hover chuột.
- Hỗ trợ phím `Esc` để ẩn Tooltip mà không rời focus.
- Nút chỉ có icon vẫn cần nhãn riêng cho trình đọc màn hình; Tooltip bổ sung chứ không thay thế nhãn đó.
- Tương phản chữ trắng (#fff) trên nền #09090b đạt >15:1, vượt chuẩn WCAG AAA.
- Không đặt thông tin bắt buộc chỉ trong Tooltip vì thiết bị cảm ứng không có hover.

## Tree — Kế thừa

Hiển thị dữ liệu dạng cấu trúc cha–con lồng nhau, cho phép bung/thu nhánh, chọn một hoặc nhiều nút và điều hướng qua các tầng phân cấp.

`import { Tree } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng khi dữ liệu có cấu trúc cha–con từ 2 tầng trở lên (cây địa giới, phòng ban, danh mục kho – khu vực – kệ).
- Dùng khi người dùng cần bung/thu nhiều nhánh và quan sát quan hệ phân cấp đồng thời.
- Dùng khi cần chọn nhiều nút theo nhánh (ví dụ: chọn cả khu vực giao hàng gồm nhiều quận/huyện).
- Dùng khi cần sắp xếp lại hoặc di chuyển nút giữa các nhánh bằng kéo–thả.
- KHÔNG dùng cho danh sách phẳng không có phân cấp — dùng List hoặc Table.
- KHÔNG dùng để chọn tuần tự theo từng cấp trong không gian hẹp (form) — dùng Cascader.
- KHÔNG dùng để điều hướng giữa các trang/khu vực ứng dụng — dùng Menu.
- KHÔNG dùng khi cấu trúc quá nhiều tầng/nút khiến người dùng lạc hướng — cân nhắc tìm kiếm, lọc hoặc phân trang thay thế.

**Nên / Không nên**

- Nên giữ mức thụt lề nhất quán giữa mọi tầng (28px/tầng mặc định) để quan hệ cha–con luôn rõ ràng.
- Không nên thụt lề tuỳ tiện, không đều giữa các tầng.
- Nên hiển thị trạng thái nửa chọn (dấu trừ) khi chỉ một phần nút con được chọn.
- Không nên đánh dấu nút cha là "đã chọn đầy đủ" khi thực tế chỉ một vài con được chọn.
- Nên tách riêng vùng bấm mũi tên (bung/thu) và vùng bấm nhãn (chọn).
- Không nên gộp hành động bung/thu và chọn vào cùng một vùng bấm.
- Nút lá không có con không được hiển thị mũi tên bung/thu.

**Biến thể, kích thước & trạng thái**

Biến thể:
- Chọn đơn (mặc định): bấm nhãn để chọn một nút; nút đang chọn nền `#fff2e6`, chữ `#ff5200`.
- Chọn nhiều (checkable): có checkbox ba trạng thái (chưa chọn / đã chọn / nửa chọn); chọn cha kéo theo con.
- Kéo–thả (draggable): tay cầm kéo, đường viền đứt nét `#ff5200` báo vị trí thả hợp lệ.
- Có biểu tượng + tìm kiếm: mỗi loại nút mang icon riêng; từ khoá khớp làm nổi nền vàng `#faad14`.

Kích thước:
- Mặc định: chiều cao hàng 32px, chữ 14px, thụt lề 28px/tầng — dùng cho giao diện quản trị desktop.
- Lớn (chạm): chiều cao hàng 40px, chữ 16px, thụt lề 32px/tầng — dùng cho màn hình cảm ứng.

Trạng thái: Mặc định | Hover (nền `#fafafa`) | Đang chọn (nền `#fff2e6`, chữ `#ff5200`) | Focus bàn phím (viền `#ff5200` 2px) | Disabled (opacity giảm, không nhận tương tác) | Loading/lazy-load (spinner khi tải nhánh con).

**Design tokens**

- `var(--ghn-text)` — chữ nút mặc định (`#09090b`)
- `var(--ghn-text-muted)` — mũi tên, chú thích (`#52525b`)
- `var(--ghn-primary)` — chữ/checkbox đang chọn, viền focus (`#ff5200`)
- `var(--ghn-primary-soft)` — nền nút đang chọn (`#fff2e6`)
- `var(--ghn-bg-subtle)` — nền hover (`#fafafa`)
- `var(--ghn-border)` — viền checkbox, đường dẫn nhánh (`#d4d4d8`)
- `var(--ghn-warning)` — nền làm nổi từ khoá tìm kiếm (`#faad14`)
- `var(--ghn-error)` — nút xoá nhánh trong menu ngữ cảnh (`#ff4d4f`)
- Bo góc hover/chọn: `8px`; thụt lề/tầng: `28px`; khoảng cách trong nút: `8px`

**Khả năng tiếp cận**

- Vùng chứa dùng `role="tree"`, nhóm con dùng `role="group"`, mỗi nút dùng `role="treeitem"`.
- Nút có con khai báo `aria-expanded="true/false"`; nút lá không khai báo thuộc tính này.
- Dùng `aria-level`, `aria-setsize`, `aria-posinset` để trình đọc màn hình đọc đúng tầng và thứ tự.
- Trạng thái chọn dùng `aria-selected`; checkbox dùng `aria-checked="mixed"` cho nửa chọn.
- Tree dùng roving tabindex: một điểm dừng Tab cho toàn cây, điều hướng bằng phím mũi tên. Hỗ trợ đầy đủ `↑↓←→ Enter Space Home End`.
- Vùng cây cần `aria-label` hoặc `aria-labelledby`; nút mũi tên và checkbox chỉ-icon phải có `aria-label`.
- Không dùng riêng màu sắc để báo trạng thái — luôn kèm icon hoặc đậm chữ.
- Viền focus luôn nhìn thấy được với độ tương phản đủ trên cả nền mặc định và nền nút đang chọn.


# Phản hồi

## Alert — Ổn định

Dải thông báo cố định hiển thị trực tiếp trong bố cục trang, dùng để truyền tải thông tin trạng thái quan trọng mà người dùng cần đọc trước khi thao tác tiếp.

`import { Alert } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi báo kết quả của một thao tác vừa diễn ra (tạo đơn thành công, cập nhật thất bại).
- Dùng khi nhắc một điều kiện ràng buộc đang ảnh hưởng tới trang (số dư ví không đủ, tài khoản chưa xác thực).
- Dùng khi cảnh báo trước khi người dùng thực hiện thao tác khó hoàn tác (xoá hàng loạt đơn).
- Dùng để hiển thị tóm tắt lỗi xác thực ở đầu một form dài.
- KHÔNG dùng cho phản hồi nhanh, thoáng qua — hãy dùng Toast (Message).
- KHÔNG dùng khi nội dung cần người dùng phải quyết định ngay và chặn luồng — hãy dùng Modal.
- KHÔNG dùng cho lỗi của một trường riêng lẻ — hãy dùng thông báo lỗi ngay dưới trường đó.
- KHÔNG dùng cho quảng cáo, khuyến mãi hay nội dung tiếp thị.

**Nên / Không nên**
- Nên: nêu rõ chuyện gì xảy ra và hướng người dùng tới cách khắc phục (ví dụ: "Thẻ bị từ chối, vui lòng kiểm tra số dư hoặc dùng thẻ khác").
- Không nên: hiển thị mã lỗi thô không kèm giải thích (ví dụ: "Lỗi: ERR_PAYMENT_5023").
- Nên: dùng đúng cấp độ — success cho kết quả tích cực, error chỉ khi thực sự có lỗi.
- Không nên: dùng màu error cho thông báo tích cực làm người dùng hiểu sai mức độ.
- Nên: đặt một Alert tóm tắt ở đầu form và chỉ ra các trường lỗi cụ thể bên dưới.
- Không nên: xếp chồng nhiều Alert lỗi liên tiếp cho từng trường, gây quá tải thị giác.
- Không nên: tự ý đổi màu icon khác với cấp độ Alert.

**Biến thể, kích thước & trạng thái**
- **info** — nền xanh nhạt, icon `circle-info`; dùng cho thông tin trung tính, gợi ý không khẩn cấp.
- **success** — nền xanh lá nhạt, icon `circle-check`; xác nhận thao tác hoàn tất.
- **warning** — nền vàng nhạt, icon `triangle-exclamation`; cảnh báo điều kiện cần lưu ý, chưa phải lỗi nghiêm trọng.
- **error** — nền đỏ nhạt, icon `circle-xmark`; báo lỗi cần xử lý, dùng tiết kiệm.
- Một kích thước thống nhất; chiều cao tự giãn theo nội dung. Có thể chỉ hiển thị tiêu đề (không cần alert-body). Padding 16px, bo góc 8px.
- Trạng thái: mặc định, có nút đóng (closable), kèm liên kết hành động, đang ẩn dần (fade out khi bị đóng, 200ms).

**Design tokens**
- Nền info: `#fff2e6` (tint info)
- Nền success: tint success (xanh lá nhạt)
- Nền warning: tint warning (vàng nhạt)
- Nền error: tint error (đỏ nhạt)
- Icon/viền info: `#006fad`
- Icon/viền success: `#52c41a`
- Icon/viền warning: `#faad14`
- Icon/viền error: `#ff4d4f`
- Màu tiêu đề: `#09090b`
- Màu nội dung (muted): `#52525b`
- Nút đóng mặc định: `#71717a`; hover: `#09090b`
- Liên kết hành động: `#006fad`
- Bo góc: `8px`; Padding: `16px`; Khoảng cách icon–nội dung: `12px`
- Font: Inter, letter-spacing `.1px`

**Khả năng tiếp cận**
- Alert info/success/warning dùng `role="status"` với `aria-live="polite"`; Alert error dùng `role="alert"` với `aria-live="assertive"` để được đọc ngay.
- Mỗi cấp độ luôn có icon riêng và tiêu đề mô tả — không chỉ dựa vào màu sắc.
- Icon ngữ nghĩa nên có nhãn ẩn ("Lỗi", "Thành công"…); nút đóng cần `aria-label="Đóng thông báo"`.
- Nút đóng kích hoạt được bằng `Enter` và `Space`; có thứ tự Tab hợp lý.
- Chữ trên nền tint đạt tỉ lệ tương phản tối thiểu 4.5:1.
- Với Alert lỗi xuất hiện sau khi gửi form, chủ động chuyển focus tới Alert để trình đọc màn hình thông báo ngay.

## Drawer — Kế thừa

Bảng trượt từ cạnh màn hình, phủ lên nội dung hiện tại để hiển thị thông tin bổ sung hoặc thao tác mà không rời khỏi ngữ cảnh đang làm việc.

`import { Drawer } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: hiển thị chi tiết bản ghi mà không rời danh sách; form chỉnh sửa/tạo mới nhiều trường; bộ lọc nâng cao nhiều tiêu chí; bảng cài đặt/cấu hình theo ngữ cảnh.
- Không dùng: thông báo ngắn cần xác nhận đơn giản (dùng Modal); cảnh báo tức thời không chặn thao tác (dùng Notification); điều hướng trang chính; nội dung quá dài cần cuộn nhiều trang (dùng trang riêng).

**Nên / Không nên**
- Nên: đặt tiêu đề ngắn gọn mô tả đúng mục đích; cố định footer hành động để nút luôn nhìn thấy khi cuộn; giữ một hành động chính nổi bật, hành động phụ làm nhạt hơn; cho phép đóng bằng Esc, nút X và bấm ra ngoài.
- Không nên: mở nhiều Drawer chồng lên nhau cùng lúc; đặt nội dung quá dài khiến người dùng cuộn vô tận; ẩn nút đóng hoặc khóa mọi lối thoát; dùng Drawer cho thông báo ngắn lẽ ra thuộc về Modal.

**Biến thể, kích thước & trạng thái**
- Vị trí trượt vào: phải (mặc định), trái, trên, dưới — dùng prop `placement`.
- Kích thước: mặc định 378px, lớn 736px, hoặc tùy chỉnh (`min(100%, Npx)`); Drawer trên/dưới dùng chiều cao thay chiều rộng; dưới 900px tự chuyển full-width.
- Trạng thái: đóng (ẩn ngoài màn hình), đang mở (trượt vào), mở hoàn toàn, đang tải (`loading`).

**Design tokens**
- `--ghn-text` (#09090b) — tiêu đề và nội dung chính.
- `--ghn-secondary-text` (#3f3f46) — văn bản mô tả phụ.
- `--ghn-muted` (#52525b) — nhãn phụ và icon nút đóng.
- `--ghn-border` (#d4d4d8) — đường viền header, footer và panel.
- `--ghn-subtle` (#fafafa) — nền phía sau lớp phủ.
- `--ghn-primary` (#ff5200) — nút hành động chính trong footer.
- `--ghn-primary-hover` (#ff7429) — hover nút chính.
- `--ghn-r-default` (8px) — bo góc panel và nút.
- `--ghn-r-tag` (6px) — bo góc thẻ trạng thái và nút đóng.
- `--ghn-s16` (16px) — padding header, body, footer.
- `--ghn-s8` (8px) — khoảng cách giữa các nút hành động.

**Khả năng tiếp cận**
- Panel khai báo `role="dialog"` và `aria-modal="true"`, liên kết tiêu đề qua `aria-labelledby`.
- Khi mở, tiêu điểm chuyển vào Drawer và bị giữ lại bên trong cho tới khi đóng.
- Phím `Esc` đóng Drawer; `Tab` / `Shift+Tab` di chuyển giữa các phần tử.
- Nút chỉ-icon (dấu X) phải có `aria-label` mô tả hành động đóng.
- Khi đóng, tiêu điểm trả về phần tử đã kích hoạt Drawer.

## Message — Kế thừa

Dải thông báo nhỏ xuất hiện ở giữa phía trên màn hình để xác nhận một hành động vừa hoàn tất, rồi tự ẩn sau ít giây mà không làm gián đoạn người dùng.

`import { message } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: xác nhận thao tác vừa thành công ("Đã lưu địa chỉ giao hàng", "Đã tạo đơn"), báo lỗi nhẹ có thể thử lại, phản hồi nhanh cho thao tác phụ (sao chép, ghim, gửi nền), báo trạng thái đang xử lý ngắn.
- KHÔNG dùng: lỗi nghiêm trọng cần người dùng xử lý (dùng Alert hoặc Modal), nội dung dài có tiêu đề/mô tả/nút hành động (dùng Notification), thông tin quan trọng không được bỏ lỡ (Message tự ẩn quá nhanh), xác nhận hành động nguy hiểm như xoá đơn/huỷ giao (dùng hộp thoại xác nhận).

**Nên / Không nên**
- Nên: viết một câu ngắn, rõ kết quả, bắt đầu bằng động từ thể đã hoàn thành ("Đã sao chép mã vận đơn").
- Nên: dùng đúng màu icon theo sắc thái — đỏ cho lỗi, xanh lá cho thành công.
- Nên: với hành động nguy hiểm cần xác nhận, dùng hộp thoại, không dùng Message thoáng qua.
- Không nên: nhồi cả đoạn văn vào Message — nội dung dài thuộc về Notification.
- Không nên: dùng icon thành công cho thông báo lỗi — sai sắc thái gây hiểu nhầm.
- Không nên: đặt quyết định quan trọng hay nút hành động vào Message tự ẩn; người dùng có thể bỏ lỡ.

**Biến thể, kích thước & trạng thái**
- 5 biến thể phân biệt bằng icon và màu ngữ nghĩa, dùng chung một bố cục:
  - **success** — icon `fa-circle-check` màu `success #52c41a`
  - **info** — icon `fa-circle-info` màu `info #006fad`
  - **warning** — icon `fa-triangle-exclamation` màu `warning #faad14`
  - **error** — icon `fa-circle-xmark` màu `error #ff4d4f`; dùng `role="alert"` + `aria-live="assertive"`
  - **loading** — icon `fa-spinner` quay màu `primary #ff5200`; không tự ẩn theo giờ, chờ kết quả
- Kích thước duy nhất: padding 8px dọc / 16px ngang, bo góc 8px, font 14px Inter, icon 16px.
- Vị trí neo: giữa, sát mép trên 24px; nhiều Message xếp chồng dọc cách nhau 12px, mới nhất ở trên.
- Tự ẩn sau ~3 giây (mặc định); di chuột vào tạm dừng bộ đếm.
- Không có nút đóng; không chiếm chỗ trong luồng bố cục.

**Design tokens**
- `var(--ghn-white)` — nền vùng chứa
- `var(--ghn-text)` — màu chữ (#09090b)
- `var(--ghn-success)` — icon success (#52c41a)
- `var(--ghn-info)` — icon info (#006fad)
- `var(--ghn-warning)` — icon warning (#faad14)
- `var(--ghn-error)` — icon error (#ff4d4f)
- `var(--ghn-primary)` — icon loading (#ff5200)
- `var(--ghn-border)` — viền mảnh tuỳ chọn (#d4d4d8)
- Box-shadow: `0 6px 16px rgba(9,9,11,.12)`

**Khả năng tiếp cận**
- Biến thể success/info/warning dùng `role="status"` + `aria-live="polite"` (trình đọc màn hình báo khi rảnh).
- Biến thể error dùng `role="alert"` + `aria-live="assertive"` (báo ngay).
- Icon đặt `aria-hidden="true"` vì ý nghĩa đã nằm trong chữ.
- Message không bao giờ cướp tiêu điểm; không nằm trong thứ tự Tab.
- Sắc thái được củng cố bằng icon và lời văn, không chỉ dựa vào màu.
- Chữ `#09090b` trên nền trắng đạt tương phản cao.
- Khi bật giảm chuyển động: hiệu ứng trượt thay bằng mờ vào/ra đơn giản.

## Modal — Ổn định

Hộp thoại chặn nền để tập trung người dùng vào một quyết định hoặc tác vụ ngắn trước khi quay lại trang.

`import { Modal } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi cần xác nhận hành động quan trọng hoặc không thể hoàn tác (xóa vĩnh viễn, hủy lô đơn hàng).
- Dùng khi cần người dùng điền biểu mẫu ngắn trong một bước (đổi mật khẩu, sửa thông tin người nhận).
- Dùng khi cần báo kết quả quan trọng mà người dùng phải ghi nhận trước khi tiếp tục.
- KHÔNG dùng khi chỉ cần xác nhận nhẹ ngay tại một nút — dùng Popconfirm thay thế.
- KHÔNG dùng khi nội dung dài, nhiều bước, hoặc cần đối chiếu với trang nền — dùng Drawer thay thế.
- KHÔNG dùng để hiển thị thông báo trạng thái thoáng qua không cần quyết định — dùng Message hoặc Notification.
- KHÔNG mở Modal lồng nhiều tầng liên tiếp khiến người dùng lạc ngữ cảnh — thiết kế lại luồng.

**Nên / Không nên**
- Nên: nhãn nút mô tả chính xác hành động ("Xóa đơn", "Lưu thay đổi") thay vì dùng "OK".
- Nên: tiêu đề nêu rõ đối tượng và tác vụ đang diễn ra ("Xóa đơn hàng #GHN1234?").
- Nên: mỗi Modal phục vụ đúng một nhiệm vụ, có lối thoát rõ ràng (nút đóng và nút Hủy).
- Nên: với hành động phá hủy, đặt nút an toàn (Hủy) làm mặc định để tránh xác nhận nhầm.
- Không nên: tiêu đề mơ hồ ("Bạn có chắc không?") và nhãn nút chung chung ("OK / No").
- Không nên: nhồi nhiều luồng tác vụ và nhiều nút chính vào một Modal.
- Không nên: dùng Modal cho thông báo có thể bỏ qua — làm gián đoạn không cần thiết.

**Biến thể, kích thước & trạng thái**

Biến thể:
- **Xác nhận** — biểu tượng cảnh báo vàng, câu hỏi ngắn, hai nút; không có nút đóng riêng.
- **Biểu mẫu** — phần đầu cố định với nút đóng, phần thân chứa các trường nhập, phần chân có Hủy + nút chính.
- **Cảnh báo nguy hiểm** — biểu tượng đỏ, nút chính màu lỗi (`var(--ghn-error)`); dùng cho hành động không thể hoàn tác.
- **Thành công** — căn giữa, biểu tượng xanh, cụm nút đề xuất bước tiếp theo.

Kích thước (bề rộng):
- Nhỏ: `416px` — xác nhận, cảnh báo, báo kết quả ngắn.
- Tiêu chuẩn: `520px` — biểu mẫu ngắn và phần lớn trường hợp.
- Lớn: `720px` — biểu mẫu nhiều cột hoặc nội dung phong phú.

Trạng thái nút:
- Mặc định — chờ người dùng quyết định.
- Đang xử lý — nút chính hiện spinner, khóa thao tác lặp; giữ Modal mở cho đến khi hoàn tất hoặc báo lỗi.
- Vô hiệu — nút chính tắt khi điều kiện chưa đủ.
- Nguy hiểm — nút chính màu lỗi cho hành động phá hủy.

**Design tokens**
- `var(--ghn-white)` — nền hộp thoại.
- `rgba(0,0,0,0.45)` — lớp phủ tối (overlay).
- `var(--ghn-border)` / `#d4d4d8` — viền phân vùng đầu/thân/chân.
- `var(--ghn-bg-subtle)` / `#fafafa` — nền phần chân.
- `var(--ghn-text)` / `#09090b` — văn bản tiêu đề.
- `var(--ghn-text-muted)` / `#52525b` — văn bản nội dung/mô tả.
- `var(--ghn-warning)` / `#faad14` — biểu tượng xác nhận.
- `var(--ghn-error)` / `#ff4d4f` — biểu tượng và nút nguy hiểm.
- `var(--ghn-success)` / `#52c41a` — biểu tượng thành công.
- `var(--ghn-primary)` / `#ff5200` — nút chính; hover `#ff7429`; active `#d4490b`.
- `var(--ghn-r-default)` / `8px` — bo góc.
- Đệm đầu/chân: `16px` trên-dưới, `24px` trái-phải; phần thân `24px` đều bốn phía.
- Khoảng cách giữa các nút: `8px`; chiều cao tối đa phần thân: `340px`.
- Bề rộng tiêu chuẩn: `520px`; lề màn hình tối thiểu: `16px`.

**Khả năng tiếp cận**
- Hộp thoại cần `role="dialog"`, `aria-modal="true"`, `aria-labelledby` trỏ tới tiêu đề.
- Khi mở, tiêu điểm chuyển vào Modal (trường nhập đầu hoặc nút chính) và bị bẫy bên trong cho đến khi đóng; khi đóng trả về phần tử kích hoạt.
- Nút đóng chỉ-biểu-tượng phải có `aria-label="Đóng"`.
- `Esc` luôn đóng được Modal (trừ tác vụ đang chạy không cho gián đoạn).
- Không chỉ dựa vào màu để truyền tải mức độ rủi ro — dùng kết hợp biểu tượng, tiêu đề và nhãn nút.
- Văn bản `#09090b` trên nền trắng và nút cam `#ff5200` chữ trắng đều đạt ngưỡng tương phản đọc được.

## Notification — Kế thừa

Thẻ nổi ở góc màn hình, báo kết quả sự kiện bất đồng bộ mà không làm gián đoạn thao tác hiện tại.

`import { notification } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng: báo kết quả tác vụ nền (tạo đơn hàng loạt, xuất file đối soát xong); thông báo sự kiện đến từ hệ thống/đối tác (đơn giao thành công, tài xế nhận đơn); phản hồi nhanh sau hành động không cần chặn màn hình (đã lưu nháp, sao chép mã vận đơn); cảnh báo cần biết nhưng không buộc xử lý ngay.
- KHÔNG dùng: lỗi validate tại trường nhập liệu — dùng field-help lỗi của Form; thông tin cần bám sát một vùng nội dung cố định — dùng Alert; thao tác buộc người dùng quyết định mới đi tiếp — dùng Modal xác nhận; phản hồi siêu ngắn cho thao tác đơn lẻ không cần tiêu đề — cân nhắc Message (toast một dòng).

**Nên / Không nên**

- Nên: tiêu đề ngắn gọn nói rõ kết quả, mô tả bổ sung chi tiết cần thiết (ví dụ: "Đã in 12 vận đơn" + "File PDF đã sẵn sàng trong mục Tải xuống").
- Nên: dùng đúng màu trạng thái — lỗi thật sự mới dùng error, để lỗi tự giữ đến khi người dùng đóng.
- Không nên: tiêu đề mơ hồ không cho biết chuyện gì xảy ra (ví dụ: "Thành công!" / "Thao tác đã được thực hiện").
- Không nên: báo lỗi bằng màu success, hoặc bắn hàng loạt thông báo cùng lúc gây quá tải.
- Không nên: gộp nhiều sự kiện vào một thẻ — mỗi thẻ chỉ một thông điệp.

**Biến thể, kích thước & trạng thái**

- 4 biến thể trạng thái: **success** (fa-circle-check, `--ghn-success`), **info** (fa-circle-info, `--ghn-info`), **warning** (fa-triangle-exclamation, `--ghn-warning`), **error** (fa-circle-xmark, `--ghn-error`).
- 1 biến thể có hành động: tối đa hai nút (1 primary + 1 text) bên dưới mô tả; loại này không nên tự đóng.
- Kích thước chuẩn: rộng 340px (desktop), 100% trừ lề 16px (mobile); padding 16px; icon 20px; bo góc 8px.
- Trạng thái vòng đời: mới hiện (trượt vào + fade ~200ms) → hiển thị → hover (tạm dừng đếm) → đóng (fade-out + thu chiều cao ~160ms).
- Success/info mặc định tự đóng sau vài giây; error giữ lại đến khi người dùng tự đóng.
- Số thẻ đồng thời nên giới hạn (tối đa 4–5); thẻ cũ nhất nhường chỗ; các thẻ cách nhau 12px.

**Design tokens**

- `--ghn-white` — nền thẻ
- `--ghn-border` (#d4d4d8) — viền 1px
- `--ghn-text` (#09090b) — chữ tiêu đề
- `--ghn-muted` (#52525b) — chữ mô tả
- `--ghn-placeholder` (#71717a) — icon đóng trạng thái nghỉ
- `--ghn-success` (#52c41a) — icon success
- `--ghn-info` (#006fad) — icon info
- `--ghn-warning` (#faad14) — icon warning
- `--ghn-error` (#ff4d4f) — icon error
- `--ghn-primary` (#ff5200) — nút hành động chính
- Bo góc 8px; padding 16px; gap icon–nội dung 12px; gap giữa thẻ 12px; shadow `0 6px 16px rgba(9,9,11,.12)`

**Khả năng tiếp cận**

- Container đặt trong `aria-live="polite"` cho success/info, `aria-live="assertive"` cho error.
- Dùng `role="status"` cho thông báo thường, `role="alert"` cho lỗi/cảnh báo khẩn.
- Nút đóng (chỉ có icon) phải có `aria-label="Đóng thông báo"`.
- Mọi icon trạng thái đặt `aria-hidden="true"`; ý nghĩa truyền qua chữ tiêu đề, không chỉ qua màu.
- Bàn phím: Tab vào thẻ, Enter/Space kích hoạt nút, Esc đóng thẻ đang focus.
- Khi thông báo xuất hiện, tiêu điểm KHÔNG tự nhảy vào thẻ để tránh ngắt thao tác.
- Thông báo tự đóng phải dừng đếm khi hover/focus; tôn trọng `prefers-reduced-motion` (thay trượt bằng fade đơn giản).

## Popconfirm — Kế thừa

Hộp xác nhận nhẹ dạng bong bóng, bật lên ngay cạnh phần tử kích hoạt để hỏi người dùng trước khi thực hiện một hành động.

`import { Popconfirm } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng khi cần xác nhận một hành động nhẹ, có thể đảo ngược: xóa một dòng trong bảng, gỡ một thẻ, hủy bộ lọc.
- Dùng khi hành động gắn liền với một phần tử cụ thể trên trang (nút inline, nút toolbar) và chỉ cần câu hỏi + hai lựa chọn.
- Dùng khi muốn giữ người dùng trong ngữ cảnh hiện tại, không phủ tối toàn màn hình.
- KHÔNG dùng cho hành động phá hủy nghiêm trọng, không thể hoàn tác (xóa tài khoản, hủy lô đơn lớn) — dùng Modal xác nhận.
- KHÔNG dùng khi cần nhập liệu, chọn nhiều mục, hoặc đọc nội dung dài — dùng Modal hoặc Drawer.
- KHÔNG dùng chỉ để thông báo kết quả — dùng Message hoặc Notification.
- KHÔNG dùng khi phần tử kích hoạt không cố định hoặc dễ cuộn ra khỏi màn hình (mất điểm neo).

**Nên / Không nên**
- Nên: đặt câu hỏi cụ thể, nêu rõ đối tượng bị tác động (ví dụ "Xóa đơn hàng #GHN1234?").
- Không nên: câu hỏi mơ hồ chung chung như "Bạn có chắc không?" mà không nói rõ hành động.
- Nên: hai nút rõ vai trò — nút phụ là Hủy, nút chính là Đồng ý màu cam GHN.
- Không nên: nhồi nội dung dài và nhiều nút chính — hãy dùng Modal thay thế.
- Nên: ẩn nút Hủy chỉ khi hành động không nguy hiểm và người dùng vẫn thoát được bằng Esc/bấm ra ngoài.
- Không nên: ép buộc người dùng xác nhận mà không có lối thoát.

**Biến thể, kích thước & trạng thái**
- **Cơ bản**: một biểu tượng + một câu hỏi + hai nút (Hủy / Đồng ý). Phù hợp phần lớn trường hợp.
- **Có mô tả phụ**: tiêu đề câu hỏi in đậm + dòng mô tả màu xám phụ bên dưới giải thích hệ quả.
- **Tùy biến biểu tượng**: dùng `fa-triangle-exclamation` màu đỏ cho cảnh báo cao, `fa-circle-info` màu xanh cho trung tính.
- **Nút nguy hiểm**: nút Đồng ý chuyển sang màu lỗi (`#ff4d4f`) cho hành động phá hủy ở mức cho phép dùng Popconfirm — dùng tiết kiệm.
- **Ẩn nút Hủy**: chỉ hiển thị Đồng ý khi hành động không rủi ro; người dùng vẫn có thể đóng bằng Esc.
- **Kích thước**: bề rộng tối đa 300px, padding 12px/16px, bo góc 8px, nút cỡ small.
- **Trạng thái**: Mặc định → Đang xử lý (spinner trên Đồng ý, giữ popover mở) → Vô hiệu (cả hai nút disabled).

**Design tokens**
- Nền popover: `#fff` | Viền: `#d4d4d8`
- Văn bản chính: `#09090b` | Văn bản phụ: `#52525b`
- Biểu tượng cảnh báo mặc định: `#faad14`
- Nút Đồng ý — nền: `#ff5200` | hover: `#ff7429` | active: `#d4490b` | chữ: `#fff`
- Nút Đồng ý nguy hiểm — nền: `#ff4d4f`
- Bo góc: `8px` | Padding: `12px` (trên–dưới) / `16px` (trái–phải)
- Cỡ chữ câu hỏi: `14px` | Cỡ chữ mô tả phụ: `13px` | Letter-spacing: `0.1px`
- Bề rộng tối đa: `300px`

**Khả năng tiếp cận**
- Popover khai báo `role="dialog"`, gắn nhãn theo câu hỏi để screen reader đọc rõ ngữ cảnh.
- Phần tử kích hoạt dùng `aria-expanded` và `aria-controls` trỏ tới popover.
- Bẫy tiêu điểm: khi mở, focus chuyển vào popover; `Tab`/`Shift+Tab` di chuyển giữa hai nút; `Esc` đóng và trả focus về điểm neo.
- Biểu tượng trang trí mang `aria-hidden="true"`; nhãn nút là văn bản rõ ràng.
- Văn bản `#09090b` trên nền trắng và nút cam `#ff5200` chữ trắng đều đạt ngưỡng tương phản.
- Mức rủi ro truyền tải bằng cả biểu tượng lẫn nội dung câu hỏi, không chỉ bằng màu.

## Progress — Kế thừa

Hiển thị trực quan mức độ hoàn thành của một tác vụ, giúp người dùng biết hệ thống đang xử lý đến đâu và còn bao lâu nữa.

`import { Progress } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

Nên dùng:
- Tải lên / tải xuống file (vận đơn, danh sách đơn hàng) khi biết dung lượng.
- Xử lý hàng loạt: in nhiều vận đơn, đồng bộ đơn, cập nhật trạng thái nhiều đơn cùng lúc.
- Form hoặc luồng nhiều bước (tạo đơn → đóng gói → lấy hàng) dùng dạng steps.
- Hiển thị tỷ lệ / KPI: tỷ lệ giao thành công, mức độ hoàn thành hồ sơ.
- Tác vụ nền dài cần cho người dùng thấy còn bao nhiêu phần trăm.

KHÔNG dùng:
- Tác vụ ngắn dưới 1 giây — không cần phản hồi tiến trình.
- Không đo được thời lượng (đợi phản hồi API không xác định) — dùng Spin/spinner thay thế.
- Thay cho điều hướng các bước có thể bấm qua lại — dùng Steps/Tabs.
- Hiển thị xếp hạng hay đánh giá theo sao — dùng Rate.
- Trang thái rỗng hoặc lỗi toàn trang — dùng Empty / Result.

**Nên / Không nên**

- Nên hiển thị nhãn phần trăm cùng tên tác vụ để người dùng biết rõ đang chờ gì.
- Không nên để thanh trôi một mình không nhãn — người dùng không biết đang xử lý gì hay còn bao lâu.
- Nên báo trạng thái cuối rõ ràng: đạt 100%, đổi màu xanh và thêm icon check xác nhận thành công.
- Không nên để thanh dừng mãi ở 99% mà không kết thúc — gây nghi ngờ hệ thống bị treo.
- Nên dùng đúng màu thương hiệu `#ff5200` cho phần đã hoàn thành ở trạng thái đang chạy.
- Không nên tự ý đổi sang màu xanh thông tin `#006fad` khi đang chạy — gây nhầm lẫn với trạng thái khác.
- Phần trăm phải phản ánh đúng tiến độ thật; không "giả" tiến trình chạy nhanh rồi đứng yên ở 99%.
- Trạng thái lỗi phải đi kèm thông báo giải thích nguyên nhân và cách thử lại, không chỉ đổi màu thanh.

**Biến thể, kích thước & trạng thái**

Biến thể:
- `line` — thanh ngang, phổ biến nhất, chiếm ít chiều cao; phù hợp trong list, card, hàng bảng.
- `circle` — vòng tròn, số liệu ở giữa; thích hợp dashboard, thẻ KPI.
- `steps` — chia tiến trình thành đoạn rời theo bước cố định.

Kích thước (line / circle):
- Small: 4px / 64px — trong hàng bảng, list dày, không gian hẹp.
- Default: 8px / 96px — mặc định cho phần lớn trường hợp.
- Large: 12px / 128px — dashboard, màn hình tải lên, cần nhấn mạnh.

Trạng thái:
- Chờ (0%): chỉ hiển thị đường ray nền.
- Đang chạy: fill `#ff5200` tăng dần.
- Thành công (100%): fill xanh `#52c41a`, kèm icon check.
- Lỗi: fill đỏ `#ff4d4f`, dừng tại điểm thất bại.

**Design tokens**

- `var(--ghn-primary)` — màu fill khi đang chạy (`#ff5200`)
- `var(--ghn-soft)` — màu đường ray nền (`#fff2e6`)
- `var(--ghn-border)` — màu ray thay thế nền trung tính (`#d4d4d8`)
- `var(--ghn-success)` — màu fill thành công (`#52c41a`)
- `var(--ghn-error)` — màu fill lỗi (`#ff4d4f`)
- `var(--ghn-info)` — màu fill thông tin vòng tròn KPI (`#006fad`)
- `var(--ghn-text)` — màu nhãn phần trăm (`#09090b`)
- `var(--ghn-muted)` — màu nhãn phụ / mô tả tác vụ (`#52525b`)
- `var(--ghn-white)` — nền lõi vòng tròn circle (`#fff`)
- `radius-progress` — bo góc thanh & ray pill (`9999px`)
- `size-line-default` / `size-line-sm` / `size-line-lg` — độ dày 8px / 4px / 12px

**Khả năng tiếp cận**

- Container dùng `role="progressbar"` để trình đọc màn hình nhận diện đúng.
- Cung cấp `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.
- Gắn nhãn tác vụ qua `aria-label` hoặc `aria-labelledby` (ví dụ "Tiến trình tải lên vận đơn").
- Tiến trình không xác định: bỏ `aria-valuenow` để báo trạng thái indeterminate.
- Không chỉ dựa vào màu: luôn kèm icon check (thành công) và icon xmark (lỗi) cùng nhãn chữ cho người dùng mù màu.
- Fill `#ff5200` trên ray `#fff2e6` bảo đảm tách bạch rõ; nhãn phần trăm `#09090b` đạt chuẩn tương phản.
- Tôn trọng `prefers-reduced-motion`: tắt animation fill nếu người dùng yêu cầu.
- Bản thân Progress không nhận focus; nút đi kèm (Hủy, Thử lại) phải nằm trong thứ tự Tab và có focus rõ ràng.

## Result — Kế thừa

Màn hình phản hồi toàn trang dùng để thông báo kết quả của một thao tác hoặc trạng thái quy trình, thường kèm icon lớn, tiêu đề, mô tả và nút hành động dẫn dắt người dùng bước tiếp theo.

`import { Result } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: sau khi tạo đơn hàng, thanh toán, hoặc gửi yêu cầu thành công.
- Dùng: khi truy cập trang lỗi hệ thống (404 không tìm thấy, 403 không có quyền, 500 lỗi máy chủ).
- Dùng: khi một thao tác lớn thất bại và cần người dùng thử lại hoặc liên hệ hỗ trợ.
- Dùng: trạng thái trống (empty) toàn trang — chưa có đơn, chưa có dữ liệu.
- KHÔNG dùng: để báo lỗi xác thực của một trường input — dùng help text hoặc Alert trong form.
- KHÔNG dùng: cho thông báo thoáng qua, tự biến mất — dùng Message hoặc Notification.
- KHÔNG dùng: khi cần người dùng ở lại trang và sửa lỗi ngay tại chỗ — dùng Alert dạng banner.
- KHÔNG dùng: để quảng bá tính năng hay khuyến mãi — đó là việc của Banner/Modal.

**Nên / Không nên**
- Nên: đặt nút hành động quan trọng nhất là primary, mỗi Result chỉ một nút primary.
- Không nên: đặt nhiều nút primary cùng cỡ cùng màu khiến người dùng không biết đâu là hành động chính.
- Nên: với lỗi, giải thích bằng ngôn ngữ người dùng và gợi ý cách khắc phục cụ thể.
- Không nên: hiển thị mã lỗi thô hoặc thông điệp kỹ thuật không có hướng dẫn.
- Nên: chọn đúng màu và icon ngữ nghĩa — success xanh lá, error đỏ, warning vàng, info xanh dương.
- Không nên: dùng icon dấu tích xanh cho kết quả thất bại, hoặc tô màu đỏ cho thông báo trung tính.

**Biến thể, kích thước & trạng thái**
- **Success** — icon `fa-circle-check`, màu `var(--ghn-success)` (#52c41a). Dùng cho hoàn tất thao tác.
- **Error** — icon `fa-circle-xmark`, màu `var(--ghn-error)` (#ff4d4f). Luôn kèm nút thử lại hoặc lối thoát.
- **Warning** — icon `fa-triangle-exclamation`, màu `var(--ghn-warning)` (#faad14). Kết quả không trọn vẹn.
- **Info** — icon `fa-circle-info`, màu `var(--ghn-info)` (#006fad). Trạng thái chờ, trung tính.
- **404 / 403 / 500** — icon biểu trưng (magnifying-glass, fa-lock, fa-circle-exclamation), màu trung tính.
- **Empty** — icon trung tính theo ngữ cảnh nghiệp vụ, kèm nút hành động khởi tạo.
- **Đang xử lý** — icon spinner xoay liên tục; nhóm hành động ẩn hoặc chuyển sang nút loading.
- Kích thước **Default**: icon 64px, tiêu đề 24px/600, mô tả 14px, padding dọc 48px — dùng cho trang toàn màn hình.
- Kích thước **Small**: icon 48px, tiêu đề 18px/600, mô tả 13px, padding dọc 24px — dùng trong panel, modal, vùng hẹp.
- Responsive: trên màn hình hẹp thu về cỡ Small, các nút xếp dọc 100% chiều ngang, cách nhau 8px.

**Design tokens**
- `var(--ghn-success)` (#52c41a) — icon Success
- `var(--ghn-error)` (#ff4d4f) — icon Error
- `var(--ghn-warning)` (#faad14) — icon Warning
- `var(--ghn-info)` (#006fad) — icon Info
- `var(--ghn-placeholder)` (#71717a) — icon trung tính (404/empty)
- `var(--ghn-text)` (#09090b) — màu tiêu đề
- `var(--ghn-muted)` (#52525b) — màu mô tả phụ
- `var(--ghn-primary)` (#ff5200) — nền nút primary
- Khoảng cách: icon→tiêu đề 24px, tiêu đề→mô tả 8px, mô tả→hành động 24px, giữa các nút 12px
- Bo góc nút: 8px; Font: Inter; Letter-spacing: 0.1px

**Khả năng tiếp cận**
- Vùng Result lỗi/cảnh báo dùng `role="alert"`; kết quả trung tính dùng `role="status"`.
- Tiêu đề Result phải là heading thực sự (cấp phù hợp trong cây nội dung), không chỉ là chữ to tô đậm.
- Icon trang trí đặt `aria-hidden="true"`; ý nghĩa trạng thái phải nằm trong văn bản, không chỉ dựa vào màu hay icon.
- Khi Result xuất hiện, focus được đưa tới tiêu đề để trình đọc màn hình đọc kết quả ngay.
- Nút hành động dùng nhãn cụ thể ("Xem đơn hàng", "Thử lại") thay vì "OK" hay "Click here" mơ hồ.
- Màu chữ tiêu đề `#09090b` và mô tả `#52525b` trên nền sáng đạt tỉ lệ tương phản tối thiểu 4.5:1.

## Skeleton — Kế thừa

Khối giữ chỗ nhấp nháy (shimmer) mô phỏng bố cục nội dung trước khi dữ liệu thật được tải xong, giúp người dùng cảm nhận trang đang phản hồi.

```js
import { Skeleton } from 'antd';
```

**Khi nào dùng / KHÔNG dùng**

- Nên dùng: tải lần đầu màn hình có bố cục cố định (danh sách đơn hàng, chi tiết vận đơn, hồ sơ khách hàng) khi thời gian chờ thường vượt ~300ms.
- Nên dùng: tải lại từng phần trang (một thẻ thống kê, một khối bảng được làm mới riêng).
- Nên dùng: khi biết trước cấu trúc nội dung (số dòng, có avatar, có ảnh) để dựng khung khớp.
- KHÔNG dùng: tác vụ dưới ~300ms — Skeleton chỉ kịp nhấp nháy một cái rồi biến mất, gây cảm giác giật.
- KHÔNG dùng: thao tác có tiến trình đo được như tải tệp — dùng Progress hiển thị phần trăm thay.
- KHÔNG dùng: khi không đoán được bố cục kết quả (tìm kiếm trả về 0 hoặc nhiều dạng) — dùng Spinner.
- KHÔNG dùng: lỗi tải hoặc không có dữ liệu — đó là trạng thái rỗng/lỗi, cần thông điệp rõ ràng, không phải Skeleton vô tận.

**Nên / Không nên**

- Nên: dựng Skeleton khớp đúng bố cục thật (đúng số dòng, có avatar nếu nội dung thật có) để khi dữ liệu về không xảy ra giật bố cục (layout shift).
- Nên: giữ tông xám trung tính; Skeleton là phông nền tạm thời, không tranh chấp thị giác với nội dung.
- Nên: luôn bật hiệu ứng shimmer (`active`) — Skeleton tĩnh dễ bị hiểu nhầm là nội dung rỗng.
- Nên: khi dữ liệu về, Skeleton biến mất ngay tại chỗ; không để Skeleton và nội dung thật chồng lẫn nhau.
- Không nên: tô Skeleton bằng màu cam thương hiệu — gây hiểu nhầm là nội dung thật và rối thị giác.
- Không nên: để Skeleton chạy vô thời hạn; sau ngưỡng chờ hợp lý mà dữ liệu chưa về, chuyển sang trạng thái lỗi với tùy chọn thử lại.
- Không nên: dùng khung Skeleton chung chung không khớp bố cục (thiếu avatar khi nội dung có avatar).

**Biến thể, kích thước & trạng thái**

Biến thể:
- Skeleton danh sách: avatar tròn + dòng văn bản — dùng cho dòng đơn hàng, danh bạ khách hàng, bình luận.
- Skeleton đoạn văn: chỉ các thanh ngang, không avatar — dùng cho khối mô tả, ghi chú vận đơn. Thanh cuối ngắn hơn mô phỏng dòng kết đoạn.
- Skeleton ảnh / thẻ: khối lớn giữ chỗ ảnh hoặc bản đồ + vài dòng text bên dưới — dùng cho thẻ sản phẩm, ảnh chứng từ, bản đồ giao hàng.
- Skeleton bảng: lưới các thanh theo hàng và cột; hàng tiêu đề đậm hơn, các hàng dữ liệu nhạt hơn.
- Skeleton avatar: chỉ hình tròn xám, nhiều kích cỡ — dùng khi chỉ ảnh đại diện đang tải còn phần text đã có.
- Skeleton nút / tag: khối chữ nhật bo góc giữ chỗ nút bấm hoặc nhãn đang chờ.

Kích thước chính:
- Thanh văn bản nhỏ: cao 12px, bán kính 8px.
- Thanh tiêu đề: cao 16px, bán kính 8px.
- Avatar nhỏ: 32×32px tròn; mặc định: 48×48px; lớn: 64×64px.
- Khối nút: cao 36px (mặc định), 32px (nhỏ), 40px (lớn).
- Khối tag: cao 24px, bán kính 6px.
- Khoảng cách giữa các thanh: 8–12px theo lưới 4px.

Trạng thái vòng đời: Đang tải (shimmer chạy) → Đã tải xong (nội dung thật thay thế) → Rỗng (trạng thái empty) hoặc Lỗi (thông điệp + thử lại).

**Design tokens**

- Màu khối giữ chỗ: `var(--ghn-border)` — `#d4d4d8` — nền các thanh và hình tròn.
- Nền vùng / ánh sáng nền: `var(--ghn-bg-subtle)` — `#fafafa` — nền phía sau và điểm sáng shimmer.
- Dải sáng shimmer: `#fff` — đỉnh sáng của dải quét.
- Bán kính thanh & khối: `8px`; bán kính tag: `6px`; bán kính avatar: `9999px`.
- Chu kỳ shimmer: `1.4s – 1.6s`, lặp vô hạn khi đang tải.
- Không dùng token màu thương hiệu (`var(--ghn-primary)`) cho Skeleton.

**Khả năng tiếp cận**

- Vùng chứa Skeleton đặt `aria-busy="true"` khi tải; đổi sang `aria-busy="false"` khi xong.
- Mỗi thanh và hình tròn giữ chỗ đặt `aria-hidden="true"` để trình đọc màn hình bỏ qua.
- Cung cấp nhãn ẩn dạng văn bản như "Đang tải đơn hàng" cho vùng Skeleton.
- Skeleton không nhận focus và không nằm trong thứ tự Tab; khi xong, tiêu điểm chuyển sang phần tử thật.
- Tôn trọng `prefers-reduced-motion`: tắt shimmer, giữ khối xám tĩnh để không gây khó chịu cho người nhạy cảm với chuyển động.
- Bọc vùng tải trong live region lịch sự (`aria-live="polite"`) để trình đọc màn hình thông báo khi nội dung xuất hiện.

## Spin — Kế thừa

Vòng xoay báo đang tải, giúp người dùng biết hệ thống đang xử lý một tác vụ chưa hoàn tất.

`import { Spin } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng khi chờ phản hồi máy chủ không biết trước thời lượng: tra mã vận đơn, tính phí giao, xác thực địa chỉ.
- Dùng khi tải lần đầu một vùng nội dung như bảng đơn hàng, thẻ thống kê, danh sách bưu cục.
- Dùng khi nút đang gửi biểu mẫu: tạo đơn, lưu thay đổi, xác nhận thanh toán.
- Dùng khi cập nhật một phần dữ liệu khi người dùng lọc hoặc đổi trang.
- KHÔNG dùng khi tác vụ có tiến độ đo được (tải file, xử lý lô đơn) — dùng Progress để hiện phần trăm.
- KHÔNG dùng khi khu vực chưa có dữ liệu lần đầu và cần khung xương — ưu tiên Skeleton.
- KHÔNG dùng khi thao tác hoàn tất tức thì (dưới ~300ms) — hiện Spin chỉ gây nhấp nháy khó chịu.
- KHÔNG dùng để báo lỗi hoặc trạng thái rỗng — dùng Alert hoặc Empty thay vì để Spin quay vô tận.

**Nên / Không nên**

- Nên đặt Spin đúng vùng đang tải kèm nhãn mô tả cụ thể ("Đang tải đơn hàng") để người dùng biết chính xác điều gì đang chờ.
- Nên đặt ngưỡng trễ tối thiểu (~300ms) trước khi hiện Spin để tác vụ nhanh không gây nhấp nháy.
- Nên kèm nhãn mô tả cho tác vụ trên 2 giây ("Đang tính phí", "Đang đồng bộ kho").
- Nên hiện Spin trong vòng tối đa 1 giây khi có độ trễ rõ rệt.
- Không nên rải nhiều Spin cùng lúc trên một màn hình — gộp thành một chỉ báo cho cả vùng.
- Không nên chặn toàn màn hình bằng Spin lớn cho thao tác cục bộ như lưu một trường.
- Không nên để Spin quay vô tận khi gặp lỗi mạng — sau một khoảng hợp lý, chuyển sang thông báo lỗi và cho phép thử lại.

**Biến thể, kích thước & trạng thái**

Biến thể:
- Chỉ báo độc lập: chỉ biểu tượng quay, không nhãn, không lớp phủ — dùng trong nút, ô nhỏ nơi ngữ cảnh đã rõ.
- Có nhãn mô tả: biểu tượng kèm văn bản giải thích tác vụ cụ thể — dùng cho tác vụ kéo dài.
- Bọc nội dung: Spin phủ lên vùng nội dung, làm mờ và khóa tương tác bên dưới.
- Toàn trang / toàn vùng: chỉ báo lớn căn giữa cho lần tải đầu cả trang hoặc tác vụ chặn toàn giao diện — hạn chế dùng.

Kích thước:
- sm · 16px: trong nút, ô nhập, dòng văn bản, chip nhỏ.
- md · 24px: bọc thẻ, bảng, khối nội dung — kích thước mặc định.
- lg · 32px: tải toàn trang hoặc tác vụ chặn toàn giao diện.

Trạng thái: Đang quay (tải) → Hoàn tất (nhường chỗ nội dung) / Lỗi (chuyển sang thông báo lỗi). Spin không có trạng thái vô hiệu hay được chọn; khi tác vụ kết thúc hãy thay bằng nội dung thật hoặc Alert.

**Design tokens**

- `var(--ghn-primary)` (#ff5200) — màu biểu tượng quay.
- `var(--ghn-color-primary-soft)` (#fff2e6) — màu vệt mờ phụ của vòng quay (biến thể vòng tròn).
- `var(--ghn-text)` (#09090b) — màu nhãn nhấn mạnh ở chỉ báo toàn trang.
- `var(--ghn-muted)` (#52525b) — màu nhãn mô tả mặc định.
- `var(--ghn-white)` (#ffffff) — nền lớp phủ bán trong suốt khi bọc nội dung.
- `var(--ghn-border)` (#d4d4d8) — viền vùng nội dung bị bọc và khối giữ chỗ.
- `var(--ghn-success)` (#52c41a) — biểu tượng khi tác vụ hoàn tất thành công.
- `var(--ghn-error)` (#ff4d4f) — biểu tượng/thông điệp khi tải thất bại.
- `radius-default` (8px) — bo góc vùng bọc và lớp phủ.
- `space-2` (8px) — khoảng cách giữa biểu tượng và nhãn.

**Khả năng tiếp cận**

- Vùng chứa Spin nên đặt `aria-live="polite"` để trình đọc màn hình đọc nhãn khi trạng thái bắt đầu mà không cắt ngang người dùng.
- Vùng nội dung bị bọc gắn `aria-busy="true"` trong khi chờ, trả về `false` khi tải xong.
- Biểu tượng quay là trang trí nên gắn `aria-hidden="true"`; ý nghĩa truyền qua nhãn văn bản hoặc `aria-label`.
- Khi Spin bọc nội dung, các điều khiển bên trong bị vô hiệu nên không gây bẫy tiêu điểm; người dùng vẫn có thể Tab ra ngoài vùng đang chờ.
- Tôn trọng tùy chọn giảm chuyển động của hệ thống (`prefers-reduced-motion`) — thay vòng quay bằng hiệu ứng mờ tĩnh.
- Biểu tượng cam #ff5200 trên nền trắng đạt tương phản đủ để nhận biết; nhãn dùng màu chữ phụ #52525b đảm bảo dễ đọc.

## Tour — Kế thừa

Chuỗi popover hướng dẫn theo bước, lần lượt làm nổi bật các phần tử trên giao diện để dẫn dắt người dùng mới làm quen với sản phẩm.

`import { Tour } from 'antd';`

**Khi nào dùng / KHÔNG dùng**
- Dùng: người dùng lần đầu vào màn hình quản lý đơn hàng cần biết các khu vực chính.
- Dùng: vừa phát hành tính năng mới (ví dụ "Tạo đơn hàng loạt") và muốn giới thiệu nhanh.
- Dùng: luồng nghiệp vụ có nhiều bước nối tiếp cần dẫn dắt theo trình tự.
- Dùng: người dùng chủ động bấm "Xem hướng dẫn" để được dẫn lại từ đầu.
- KHÔNG dùng: chỉ cần giải thích một nút hay trường nhập đơn lẻ — dùng Tooltip thay thế.
- KHÔNG dùng: thông tin dài, nhiều mục cần tra cứu lại — dùng trang Trợ giúp/FAQ.
- KHÔNG dùng: cảnh báo hoặc xác nhận một hành động — dùng Modal hoặc Alert.
- KHÔNG dùng: hiển thị lặp lại mỗi lần vào trang khiến người dùng khó chịu.

**Nên / Không nên**
- Nên: giới hạn Tour trong 3–5 bước, mỗi bước một ý chính; tiêu đề dưới 6 từ, mô tả 1–2 câu.
- Nên: luôn hiển thị nút đóng và "Bỏ qua" để người dùng thoát bất cứ lúc nào.
- Nên: viết tiêu đề ngắn, tập trung vào lợi ích (ví dụ "Lọc đơn nhanh theo khu vực").
- Nên: highlight ôm sát đúng phần tử đang nói tới, popover trỏ rõ vào đó; giao diện tự cuộn để phần tử luôn trong tầm nhìn.
- Không nên: tạo Tour dài 10+ bước mô tả mọi nút trên màn hình.
- Không nên: ép người dùng đi hết Tour mới được dùng tính năng.
- Không nên: viết mô tả dài dòng, kể chi tiết kỹ thuật không liên quan đến hành động.
- Không nên: để vùng highlight lệch khỏi phần tử hoặc popover che mất chính phần tử đó.

**Biến thể, kích thước & trạng thái**
- Biến thể: Tour gắn phần tử (anchored) — phổ biến nhất, popover neo vào phần tử cụ thể kèm highlight.
- Biến thể: Tour ở giữa màn hình (centered) — không neo phần tử, dùng cho bước chào mừng hoặc tổng kết.
- Biến thể: Tour có ảnh minh hoạ — kèm hình ảnh/screenshot, phù hợp tính năng trực quan.
- Biến thể: Tour gọn (chỉ chữ) — tối giản, chỉ tiêu đề và mô tả.
- Kích thước popover: rộng 320px mặc định (tối đa 360px), padding 16px, bo góc 8px.
- Trạng thái: bước đầu (nút "Trước" vô hiệu), bước thường (nút "Tiếp" sáng), bước cuối (nút "Hoàn tất"), liên kết "Bỏ qua".
- Chỉ số tiến trình hiển thị dạng chấm hoặc văn bản "Bước X / Y".
- Bấm vào overlay nền sẽ KHÔNG đóng Tour; chỉ nút đóng hoặc "Bỏ qua" mới kết thúc.

**Design tokens**
- `var(--ghn-primary)` — nút chính, viền vùng highlight (`#ff5200`)
- `var(--ghn-primary-hover)` — nút chính khi hover (`#ff7429`)
- `var(--ghn-primary-active)` — nút chính khi nhấn (`#d4490b`)
- `var(--ghn-on-primary)` — chữ trên nút chính (`#fff`)
- `var(--ghn-text)` — tiêu đề popover (`#09090b`)
- `var(--ghn-muted)` — mô tả bước (`#52525b`)
- `var(--ghn-placeholder)` — chỉ số tiến trình (`#71717a`)
- `var(--ghn-border)` — viền popover, nút phụ (`#d4d4d8`)
- `var(--ghn-white)` — nền popover (`#fff`)
- `var(--ghn-overlay)` — lớp phủ nền (`rgba(9,9,11,.45)`)
- `var(--ghn-radius-default)` — bo góc popover, highlight, nút (`8px`)
- `var(--ghn-shadow-popover)` — đổ bóng popover (`0 8px 24px rgba(9,9,11,.18)`)

**Khả năng tiếp cận**
- Popover dùng `role="dialog"` kèm `aria-modal="true"`; gắn `aria-labelledby` tới tiêu đề và `aria-describedby` tới mô tả bước.
- Chỉ số tiến trình công bố bằng văn bản ("Bước 2 trên 4"), không chỉ dựa vào chấm tròn.
- Hỗ trợ bàn phím: Tab/Shift+Tab trong popover, Enter/Space kích hoạt nút, ← → chuyển bước, Esc đóng Tour.
- Focus trap: giữ focus trong popover khi Tour mở; trả focus về phần tử kích hoạt khi đóng.
- Nút đóng có `aria-label="Đóng hướng dẫn"`; các nút Trước/Tiếp/Hoàn tất có nhãn rõ ràng.
- Tôn trọng `prefers-reduced-motion`: tắt hiệu ứng dịch chuyển khi người dùng bật.

## Watermark — Kế thừa

Phủ chữ hoặc logo mờ lặp lại lên vùng nội dung để xác nhận quyền sở hữu và ngăn sao chụp trái phép.

`import { Watermark } from 'antd';`

**Khi nào dùng / KHÔNG dùng**

- Dùng: tài liệu nội bộ, báo cáo doanh thu, bảng kê đối soát cần đánh dấu nguồn gốc.
- Dùng: ảnh chứng từ giao hàng (POD), ảnh kiện hàng cần chống sao chép.
- Dùng: trang xem trước hợp đồng, vận đơn trước khi xác nhận in.
- Dùng: màn hình chứa dữ liệu nhạy cảm có thể bị chụp lại để chia sẻ ngoài.
- KHÔNG dùng: form nhập liệu hoặc luồng thao tác chính cần độ rõ tối đa.
- KHÔNG dùng: khu vực có nhiều chữ nhỏ (bảng dày đặc) nơi watermark làm giảm khả năng đọc.
- KHÔNG dùng: trang công khai dành cho khách hàng (gây cảm giác thiếu hoàn thiện).
- KHÔNG dùng: thành phần điều hướng, nút bấm, hoặc bất kỳ phần tử tương tác nào.

**Nên / Không nên**

- Nên: giữ độ mờ thấp (khoảng 10–16%) để nội dung bên dưới luôn rõ ràng.
- Nên: dùng màu xám trung tính để watermark hòa vào nền, không gây rối thị giác.
- Nên: phủ kín toàn bộ vùng nội dung, kể cả khi cuộn, để không có vùng "trắng" thoát khỏi watermark.
- Không nên: đặt độ mờ quá cao khiến chữ watermark cạnh tranh và che lấp nội dung.
- Không nên: dùng nhiều màu sặc sỡ hoặc màu trạng thái (đỏ, xanh) làm watermark.
- Không nên: chỉ đặt một nhãn watermark ở góc, dễ bị cắt bỏ khi sao chụp.

**Biến thể, kích thước & trạng thái**

Biến thể:
- Chữ: nhãn văn bản ngắn ("GHN") lặp lại — phổ biến nhất, nhẹ và dễ đọc xuyên qua.
- Hình / biểu tượng: logo hoặc icon thương hiệu — phù hợp ảnh chứng từ giao hàng.
- Đa dòng: hai dòng trở lên (ví dụ "GHN – Nội bộ") — cần tăng khoảng cách lặp để giữ độ thoáng.
- Ngang (không xoay): mật độ cao, độ mờ thấp hơn — dùng cho tài liệu in hoặc bảng dữ liệu.

Kích thước:
- Nhỏ (dày): cỡ chữ 12px, gap 16px — bảng dữ liệu, vùng nhỏ cần phủ kín.
- Vừa (mặc định): cỡ chữ 16px, gap 24px — phần lớn tài liệu và báo cáo.
- Lớn (thưa): cỡ chữ 22px, gap 32px — trang xem trước cỡ lớn, ảnh độ phân giải cao.

Trạng thái:
- Nền sáng: chữ mờ màu xám đậm hơn nền (opacity 0.13).
- Nền tối: chữ mờ màu sáng, tăng nhẹ độ mờ (opacity 0.18) để cân bằng.
- Nhấn thương hiệu: dùng màu cam GHN khi cần nổi bật (hạn chế).

**Design tokens**

- `watermark.color` — `#52525b` — màu chữ trên nền sáng (muted).
- `watermark.color.inverse` — `#fafafa` — màu chữ trên nền tối.
- `watermark.color.brand` — `#ff5200` — màu cam GHN khi cần nổi bật (dùng hạn chế).
- `watermark.opacity` — `0.13` — độ mờ mặc định trên nền sáng.
- `watermark.opacity.dark` — `0.18` — độ mờ trên nền tối.
- `watermark.rotate` — `-22deg` — góc xoay chéo của mẫu lặp.
- `watermark.gap.x` / `watermark.gap.y` — `24px` — khoảng cách lặp mặc định (bám lưới 4px: 16/24/32px).
- `watermark.font.size` — `16px` — cỡ chữ đơn vị mẫu mặc định.
- `watermark.font.weight` — `600` — đủ rõ khi mờ.
- `watermark.font.family` — `Inter` — phông thống nhất toàn hệ thống.
- `watermark.letter.spacing` — `0.1px` — giãn ký tự chuẩn.

**Khả năng tiếp cận**

- Lớp watermark mang `aria-hidden="true"` — không bị trình đọc màn hình đọc lặp lại.
- Không nhận focus bàn phím; `Tab` chỉ di chuyển qua các phần tử nội dung thật.
- Độ mờ thấp đảm bảo văn bản bên dưới vẫn đạt tỉ lệ tương phản tối thiểu 4.5:1 (WCAG AA).
- Mọi thông tin quan trọng (nhãn bảo mật, nguồn) phải đồng thời xuất hiện dưới dạng văn bản đọc được — không phụ thuộc vào watermark để truyền thông tin.
- Watermark tĩnh hoàn toàn, không bổ sung hiệu ứng động.


