import "./courseSearchForm.scss"

function CourseSearchForm(){
    return (
        <section className="searchForm">
            <form>
                <input 
                 type="text" name="courseName" 
                 />
                <div className="price">
                    <label>السعر</label>
                    <input 
                    type="checkbox"
                    name="general"
                    />
                    <label>الجميع</label>
                    <input 
                    type="checkbox"
                    name="general"
                    />
                    <label>مجاني</label>
                    <input 
                    type="checkbox"
                    name="general"
                    />
                    <label>مدفوع</label>
                </div>
                <select>
                    <option value="all">
                        جميع المواضيع
                    </option>
                    <option value="sciencs">
                        العلوم
                    </option>
                    <option value="languages">
                        لغات
                    </option>
                    <option value="business">
                        أعمال وريادة
                    </option>
                    <option value="health">
                        صحة وتغذية
                    </option>
                </select>
            </form>
        </section>
    )
}

export default CourseSearchForm