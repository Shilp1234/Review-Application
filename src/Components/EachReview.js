import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Card from './UserInterface/Card'
import { motion, AnimatePresence } from "framer-motion"

export default function EachReview({ review, handleDelete }) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    key={review.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Card>
                        <div className="cardHeader">
                            <span className="rating">
                                {review.rating}
                            </span>
                            <span className="name">
                                {review.name}
                            </span>
                            <span className="icon" onClick={handleDelete}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                        </div>
                        <div className="comment">
                            {review.comment}
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </>
    )
}