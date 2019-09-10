package com.hybrid.utils;

import android.content.Context;
import android.content.Intent;

import com.hybrid.ui.ACMEReactActivity;
import com.hybrid.ui.HolidaysReactActivity;

public class UiUtils {
    public static void openHolidaysModule(Context context,String data){
        Intent i = new Intent(context, HolidaysReactActivity.class);
        i.putExtra("data",data);
        context.startActivity(i);
    }
    public static void openACMEModule(Context context,String data){
        Intent i = new Intent(context, ACMEReactActivity.class);
        i.putExtra("data",data);
        context.startActivity(i);
    }
}
