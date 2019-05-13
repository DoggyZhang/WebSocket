package interfaces;

public abstract class Task implements Runnable {

    private ProgressListener listener;

    public void setListener(ProgressListener listener) {
        this.listener = listener;
    }

    public ProgressListener getListener(){
        return listener;
    }

    public void run() {
        if (listener != null) {
            listener.onStart();
        }
        String msg = execute();
        if (listener != null) {
            listener.onFinish(msg);
        }
    }

    public abstract String execute();
}
