package com.hybrid.ui;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class ReactBaseActivity extends ReactActivity {
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this,getMainComponentName()){
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                return getIntent().getExtras();
            }
        };

    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }
}
