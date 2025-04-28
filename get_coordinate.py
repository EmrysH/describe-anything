import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk

# Global variables to store the starting and ending points of the bounding box
start_x, start_y = None, None
end_x, end_y = None, None
rect_id = None

def get_click_coordinates(event):
    """Callback function to handle single mouse clicks (optional)."""
    x, y = event.x, event.y
    print(f"Mouse clicked at: ({x}, {y})")

def start_bbox(event):
    """Callback function to handle the start of bounding box creation."""
    global start_x, start_y, rect_id
    start_x, start_y = event.x, event.y
    # Create a rectangle as a visual aid (initially small)
    rect_id = canvas.create_rectangle(start_x, start_y, start_x, start_y, outline="red", width=2)

def update_bbox(event):
    """Callback function to update the bounding box as the mouse is dragged."""
    global rect_id
    end_x, end_y = event.x, event.y
    # Update the rectangle's dimensions dynamically
    canvas.coords(rect_id, start_x, start_y, end_x, end_y)

def end_bbox(event):
    """Callback function to finalize the bounding box and print coordinates."""
    global end_x, end_y
    end_x, end_y = event.x, event.y
    print(f"Bounding box defined: Top-left ({start_x}, {start_y}), Bottom-right ({end_x}, {end_y})")

def load_image():
    """Function to load an image using a file dialog."""
    file_path = filedialog.askopenfilename(
        title="Select an Image",
        filetypes=[("Image Files", "*.png *.jpg *.jpeg *.bmp *.gif")]
    )
    if file_path:
        # Open the image with PIL
        image = Image.open(file_path)
        # Convert image to a format Tkinter can use
        img_tk = ImageTk.PhotoImage(image)
        # Display the image in the canvas
        canvas.config(width=img_tk.width(), height=img_tk.height())
        canvas.image = img_tk  # Store reference to avoid garbage collection
        canvas.create_image(0, 0, anchor="nw", image=img_tk)

# Create the main application window
root = tk.Tk()
root.title("Image Bounding Box Selector")

# Create a Canvas to display the image
canvas = tk.Canvas(root)
canvas.pack()

# Bind mouse events for bounding box creation
canvas.bind("<Button-1>", start_bbox)  # Left mouse button pressed
canvas.bind("<B1-Motion>", update_bbox)  # Mouse dragged with left button pressed
canvas.bind("<ButtonRelease-1>", end_bbox)  # Left mouse button released

# Add a button to load an image
load_button = tk.Button(root, text="Load Image", command=load_image)
load_button.pack()

# Start the Tkinter main loop
root.mainloop()