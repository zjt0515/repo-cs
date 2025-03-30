  ; 空描述符 (必须存在)
  dd 0x0
  dd 0x0

  ; 代码段描述符
  dw 0xFFFF    ; Limit (段界限) 低16位
  dw 0x0000    ; Base (段基址) 低16位
  db 0x00      ; Base 中8位
  db 0x9A      ; Type (代码段，特权级0，存在位)
  db 0xCF      ; Limit 高4位 + 标志位 (4KB 粒度, 32位模式)
  db 0x00      ; Base 高8位

  ; 数据段描述符
  dw 0xFFFF    ; Limit (段界限) 低16位
  dw 0x0000    ; Base (段基址) 低16位
  db 0x00      ; Base 中8位
  db 0x92      ; Type (数据段，特权级0，存在位)
  db 0xCF      ; Limit 高4位 + 标志位 (4KB 粒度, 32位模式)
  db 0x00      ; Base 高8位