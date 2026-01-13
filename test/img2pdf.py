import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image
import os

SUPPORTED_EXTS = (".jpg", ".jpeg", ".png")

class ImageToPDFApp:
    def __init__(self, root):
        self.root = root
        self.root.title("图片转 PDF")
        self.root.geometry("550x420")

        self.image_paths = []

        # 顶部按钮
        frame_top = tk.Frame(root)
        frame_top.pack(pady=10)

        tk.Button(frame_top, text="选择图片", command=self.select_images).grid(row=0, column=0, padx=5)
        tk.Button(frame_top, text="选择文件夹", command=self.select_folder).grid(row=0, column=1, padx=5)
        tk.Button(frame_top, text="上移", command=self.move_up).grid(row=0, column=2, padx=5)
        tk.Button(frame_top, text="下移", command=self.move_down).grid(row=0, column=3, padx=5)

        # 列表框
        self.listbox = tk.Listbox(root, width=70, height=15)
        self.listbox.pack(pady=10)

        # 底部按钮
        tk.Button(root, text="生成 PDF", command=self.convert_to_pdf).pack(pady=10)

    def select_images(self):
        paths = filedialog.askopenfilenames(
            title="选择图片",
            filetypes=[("Image Files", "*.jpg *.jpeg *.png")]
        )
        if paths:
            self.image_paths = list(paths)
            self.refresh_listbox()

    def select_folder(self):
        folder = filedialog.askdirectory(title="选择图片文件夹")
        if not folder:
            return

        images = []
        for name in sorted(os.listdir(folder)):
            if name.lower().endswith(SUPPORTED_EXTS):
                images.append(os.path.join(folder, name))

        if not images:
            messagebox.showwarning("提示", "该文件夹中没有图片")
            return

        self.image_paths = images
        self.refresh_listbox()

    def refresh_listbox(self):
        self.listbox.delete(0, tk.END)
        for path in self.image_paths:
            self.listbox.insert(tk.END, os.path.basename(path))

    def move_up(self):
        index = self.listbox.curselection()
        if not index or index[0] == 0:
            return
        i = index[0]
        self.image_paths[i - 1], self.image_paths[i] = self.image_paths[i], self.image_paths[i - 1]
        self.refresh_listbox()
        self.listbox.select_set(i - 1)

    def move_down(self):
        index = self.listbox.curselection()
        if not index or index[0] == len(self.image_paths) - 1:
            return
        i = index[0]
        self.image_paths[i + 1], self.image_paths[i] = self.image_paths[i], self.image_paths[i + 1]
        self.refresh_listbox()
        self.listbox.select_set(i + 1)

    def convert_to_pdf(self):
        if not self.image_paths:
            messagebox.showwarning("提示", "请先选择图片")
            return

        save_path = filedialog.asksaveasfilename(
            defaultextension=".pdf",
            filetypes=[("PDF Files", "*.pdf")]
        )
        if not save_path:
            return

        try:
            images = [Image.open(p).convert("RGB") for p in self.image_paths]
            images[0].save(
                save_path,
                save_all=True,
                append_images=images[1:]
            )
            messagebox.showinfo("成功", "PDF 生成成功！")
        except Exception as e:
            messagebox.showerror("错误", str(e))


if __name__ == "__main__":
    root = tk.Tk()
    app = ImageToPDFApp(root)
    root.mainloop()
