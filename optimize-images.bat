@echo off
echo Mengoptimalkan gambar untuk web...

REM Hapus gambar PNG yang besar dan tidak digunakan lagi
if exist "public\images\banner\homeBase1.png" (
    echo Menghapus homeBase1.png yang besar...
    del "public\images\banner\homeBase1.png"
)

if exist "public\images\banner\homeBase2.png" (
    echo Menghapus homeBase2.png yang besar...
    del "public\images\banner\homeBase2.png"
)

REM Hapus SVG yang besar di ourservice
if exist "public\images\ourservice\*.svg" (
    echo Menghapus file SVG yang besar...
    del "public\images\ourservice\*.svg"
)

REM Hapus PNG profil yang besar
if exist "public\images\struktur\Komisaris.png" (
    echo Menghapus Komisaris.png yang besar...
    del "public\images\struktur\Komisaris.png"
)

if exist "public\images\struktur\Direktur1.png" (
    echo Menghapus Direktur1.png yang besar...
    del "public\images\struktur\Direktur1.png"
)

echo.
echo Optimasi selesai!
echo Gambar yang dihapus:
echo - homeBase1.png (15.2 MB) -> menggunakan homeBase1.jpg (252 KB)
echo - homeBase2.png (14.6 MB) -> menggunakan homeBase2.jpg (312 KB)  
echo - SVG files (4-5 MB each) -> menggunakan JPG (200-300 KB each)
echo - Komisaris.png (14.9 MB) -> perlu diganti dengan versi yang lebih kecil
echo - Direktur1.png (2.1 MB) -> perlu diganti dengan versi yang lebih kecil
echo.
echo Total penghematan: ~50+ MB
pause