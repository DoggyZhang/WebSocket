package interfaces;

public interface ProgressListener {

    void onStart();

    void onFinish(String msg);
}
