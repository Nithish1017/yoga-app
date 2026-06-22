@echo off
echo === Yoga AI - Android Installer (ADB) ===
echo.

set ADB_PATH=C:\Users\ganes\AppData\Local\Android\Sdk\platform-tools\adb.exe
set APK_PATH=c:\Users\ganes\Videos\yoga ai app\frontend\android\app\build\outputs\apk\debug\app-debug.apk

if not exist "%APK_PATH%" (
    echo [ERROR] Compiled APK not found!
    echo Please run build_android.bat first to build the APK.
    echo.
    pause
    exit /b 1
)

if not exist "%ADB_PATH%" (
    echo [ERROR] ADB not found at %ADB_PATH%
    echo Please make sure the Android SDK is installed correctly.
    echo.
    pause
    exit /b 1
)

echo [1/2] Checking for connected Android devices...
"%ADB_PATH%" devices
echo.
echo Make sure your phone is connected via USB, and "USB Debugging" is enabled in Developer Options.
echo.
pause

echo [2/2] Installing APK to device...
"%ADB_PATH%" install -r "%APK_PATH%"
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Installation failed.
    echo Please check if the device is connected and unlocked.
    echo.
) else (
    echo.
    echo ===================================================
    echo SUCCESS! Yoga AI installed on your mobile phone!
    echo ===================================================
    echo.
)
pause
