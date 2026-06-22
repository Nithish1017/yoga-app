@echo off
echo === Yoga AI - Android Build Automation Script ===
echo.

cd /d "%~dp0"

echo [1/6] Installing dependencies...
call npm install --legacy-peer-deps
if %ERRORLEVEL% neq 0 (
    echo Error installing dependencies.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/6] Building website assets...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Error building the frontend.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/6] Adding Android platform...
if not exist "android" (
    call npx cap add android
    if %ERRORLEVEL% neq 0 (
        echo Error adding Android platform.
        pause
        exit /b %ERRORLEVEL%
    )
) else (
    echo Android platform already added.
)

echo.
echo [4/6] Syncing assets to Android...
call npx cap sync
if %ERRORLEVEL% neq 0 (
    echo Error syncing assets to Capacitor.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [5/6] Setting up local.properties (SDK Path)...
(
echo sdk.dir=C\:\\Users\\ganes\\AppData\\Local\\Android\\Sdk
) > android\local.properties
echo SDK path configured to C:\Users\ganes\AppData\Local\Android\Sdk

echo.
echo [6/6] Compiling Android App (APK)...
:: Set JAVA_HOME dynamically to Android Studio's bundled JDK if available
if exist "C:\Program Files\Android\Android Studio\jbr" (
    set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
    set "PATH=C:\Program Files\Android\Android Studio\jbr\bin;%PATH%"
    echo Using Android Studio Java JBR: C:\Program Files\Android\Android Studio\jbr
) else (
    echo [WARNING] Bundled Android Studio JBR not found at default location.
)

cd android
call gradlew.bat assembleDebug
if %ERRORLEVEL% neq 0 (
    echo Gradle build failed.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ===================================================
echo BUILD SUCCESSFUL!
echo Android APK path: 
echo   c:\Users\ganes\Videos\yoga ai app\frontend\android\app\build\outputs\apk\debug\app-debug.apk
echo ===================================================
pause
