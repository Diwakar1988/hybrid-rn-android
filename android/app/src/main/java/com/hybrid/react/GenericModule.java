package com.hybrid.react;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.hybrid.utils.UiUtils;

import javax.annotation.Nonnull;

public class GenericModule extends ReactContextBaseJavaModule {
    public GenericModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Generic";
    }

    @ReactMethod
    public void launchACME() {
        Log.d(GenericModule.class.getSimpleName(),"************ launchACME().getCurrentActivity() = "+getCurrentActivity().getClass().getSimpleName());
        UiUtils.openACMEModule(getCurrentActivity(),"ACME Landing");
    }

    @ReactMethod
    public void finishActivity(){
        getCurrentActivity().finish();
    }

}
