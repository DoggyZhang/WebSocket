package utils;

public class Log {

    public static final String PREFIX = "Web : ";

    /**
     * 输出Debug的LOG记录
     */
    public static void d(String TAG, String msg) {
        System.out.println(PREFIX + TAG + " : " + msg);
    }

}
